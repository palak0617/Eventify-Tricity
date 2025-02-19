// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBiucGvP-mJ_yWbZFfvU__g53iIBmC_xKo",
    authDomain: "eventify-tricity.firebaseapp.com",
    databaseURL: "https://eventify-tricity-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "eventify-tricity",
    storageBucket: "eventify-tricity.firebasestorage.app",
    messagingSenderId: "464396529197",
    appId: "1:464396529197:web:c605539fc7623b799112a4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Auth and Database references
  const auth = firebase.auth();
  const database = firebase.database();
  
  // DOM Elements
  const profilePicture = document.getElementById('profile-picture');
  const userName = document.getElementById('user-name');
  const userEmail = document.getElementById('user-email');
  const userRole = document.getElementById('user-role');
  const createEventCard = document.getElementById('create-event-card');
  const logoutButton = document.getElementById('logout-button');
  
  // Toast notification function
  function showToast(message, type = 'success') {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.className = `toast ${type} show`;
      
      setTimeout(() => {
          toast.className = 'toast';
      }, 3000);
  }
  
  // Check authentication and load user data
  auth.onAuthStateChanged(async (user) => {
      if (user) {
          // Get user data from database
          const snapshot = await database.ref('users/' + user.uid).once('value');
          const userData = snapshot.val();
          
          if (userData) {
              // Update profile information
              profilePicture.src = userData.photoURL || 'https://via.placeholder.com/100';
              userName.textContent = userData.name;
              userEmail.textContent = userData.email;
              userRole.textContent = userData.role.charAt(0).toUpperCase() + userData.role.slice(1);
              
              // Show create event card for admin and organizer roles
              if (userData.role === 'admin' || userData.role === 'organizer') {
                  createEventCard.style.display = 'block';
              }
          }
      } else {
          // Redirect to login if not authenticated
          window.location.href = 'user.html';
      }
  });
  
  // Logout functionality
  logoutButton.addEventListener('click', async () => {
      try {
          await auth.signOut();
          window.location.href = 'index.html';
      } catch (error) {
          showToast(error.message, 'error');
      }
  });
  
  // Dashboard card click handlers
  document.querySelectorAll('.dashboard-card').forEach(card => {
      card.addEventListener('click', () => {
          const title = card.querySelector('h3').textContent;
          
          switch (title) {
              case 'Profile Settings':
                  // TODO: Implement profile settings
                  showToast('Profile settings coming soon!');
                  break;
              case 'Saved Events':
                  // TODO: Implement saved events
                  showToast('Saved events coming soon!');
                  break;
              case 'Registered Events':
                  // TODO: Implement registered events
                  showToast('Registered events coming soon!');
                  break;
              case 'Create Event':
                  // TODO: Implement event creation
                  showToast('Event creation coming soon!');
                  break;
          }
      });
  });

// auth.onAuthStateChanged(async (user) => {
//     if (user) {
//         try {
//             // Fetch user data from Realtime Database
//             const snapshot = await database.ref('users/' + user.uid).once('value');
//             const userData = snapshot.val();

//             if (userData) {
//                 // Update profile details on the dashboard
//                 document.getElementById('user-name').textContent = userData.name;
//                 document.getElementById('user-email').textContent = userData.email;
//                 document.getElementById('user-role').textContent = userData.role.charAt(0).toUpperCase() + userData.role.slice(1);
//                 document.getElementById('profile-picture').src = userData.photoURL || 'https://via.placeholder.com/100';

//                 // Show "Create Event" button for admins & organizers
//                 if (userData.role === 'admin' || userData.role === 'organizer') {
//                     document.getElementById('create-event-card').style.display = 'block';
//                 }
//             } else {
//                 showToast('User data not found!', 'error');
//             }
//         } catch (error) {
//             showToast('Error loading user data!', 'error');
//         }
//     } else {
//         window.location.href = 'user.html'; // Redirect if not logged in
//     }
// });


// document.getElementById('logout-button').addEventListener('click', async () => {
//     try {
//         await auth.signOut();
//         showToast('Logged out successfully!');
//         window.location.href = 'user.html'; // Redirect to login page
//     } catch (error) {
//         showToast(error.message, 'error');
//     }
// });
