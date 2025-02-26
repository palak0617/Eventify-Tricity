const firebaseConfig = {
    apiKey: "AIzaSyBiucGvP-mJ_yWbZFfvU__g53iIBmC_xKo",
    authDomain: "eventify-tricity.firebaseapp.com",
    databaseURL: "https://eventify-tricity-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "eventify-tricity",
    storageBucket: "",
    messagingSenderId: "464396529197",
    appId: "1:464396529197:web:c605539fc7623b799112a4"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

// document.getElementById('signup-form').addEventListener('submit', async (e) => {
//     e.preventDefault();

//     // Get form values
//     const name = document.getElementById('signup-name').value.trim();
//     const email = document.getElementById('signup-email').value.trim();
//     const password = document.getElementById('signup-password').value;
//     const confirmPassword = document.getElementById('signup-confirm-password').value;
//     const role = document.getElementById('signup-role').value;
//     const phone = document.getElementById('signup-phone').value.trim();
//     const photoFile = document.getElementById('signup-photo').files[0]; // Will use Imgur later

//     // Password validation
//     if (password !== confirmPassword) {
//         showToast('Passwords do not match!', 'error');
//         return;
//     }

//     try {
//         // Create user in Firebase Authentication
//         const userCredential = await auth.createUserWithEmailAndPassword(email, password);
//         const user = userCredential.user;

//         // Store user data in Realtime Database
//         const userData = {
//             name: name,
//             email: email,
//             role: role,
//             phoneNumber: phone,
//             photoURL: "" // Placeholder (we'll upload to Imgur later)
//         };

//         await database.ref('users/' + user.uid).set(userData);

//         showToast('Account created successfully!');
//         window.location.href = 'dashboard.html';

//     } catch (error) {
//         showToast(error.message, 'error');
//     }
// });


  const storage = firebase.storage();
  
  const authTabs = document.querySelectorAll('.auth-tab');
  const authForms = document.querySelectorAll('.auth-form');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const togglePasswordButtons = document.querySelectorAll('.toggle-password');
  
  function showToast(message, type = 'success') {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.className = `toast ${type} show`;
      
      setTimeout(() => {
          toast.className = 'toast';
      }, 3000);
  }
  
  togglePasswordButtons.forEach(button => {
      button.addEventListener('click', () => {
          const input = button.parentElement.querySelector('input');
          const icon = button.querySelector('i');
          
          if (input.type === 'password') {
              input.type = 'text';
              icon.className = 'far fa-eye-slash';
          } else {
              input.type = 'password';
              icon.className = 'far fa-eye';
          }
      });
  });
  
  authTabs.forEach(tab => {
      tab.addEventListener('click', () => {
          const targetId = tab.dataset.tab;
          
          authTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          
          authForms.forEach(form => {
              form.classList.remove('active');
              if (form.id === `${targetId}Form`) {
                  form.classList.add('active');
              }
          });
      });
  });
  
  loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      
      try {
          await auth.signInWithEmailAndPassword(email, password);
          showToast('Login successful!');
          window.location.href = 'dashboard.html';
      } catch (error) {
          showToast(error.message, 'error');
      }
  });
  
  signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const name = document.getElementById('signup-name').value;
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      const confirmPassword = document.getElementById('signup-confirm-password').value;
      const role = document.getElementById('signup-role').value;
      const phone = document.getElementById('signup-phone').value;
      const photoFile = document.getElementById('signup-photo').files[0];
      
      if (password !== confirmPassword) {
          showToast('Passwords do not match!', 'error');
          return;
      }
      
      try {
          const userCredential = await auth.createUserWithEmailAndPassword(email, password);
          const user = userCredential.user;
          
          let photoURL = '';
          if (photoFile) {
              const photoRef = storage.ref().child(`profile_pictures/${user.uid}`);
              await photoRef.put(photoFile);
              photoURL = await photoRef.getDownloadURL();
          }
          
          await database.ref('users/' + user.uid).set({
              name: name,
              email: email,
              role: role,
              phoneNumber: phone,
              photoURL: photoURL,
              savedEvents: [],
              registeredEvents: []
          });
          
          showToast('Account created successfully!');
          window.location.href = 'dashboard.html';
      } catch (error) {
          showToast(error.message, 'error');
      }
  });
  
  auth.onAuthStateChanged(user => {
      if (user && window.location.pathname.includes('user.html')) {
          window.location.href = 'dashboard.html';
      }
  });