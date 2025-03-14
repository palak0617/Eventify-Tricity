const form = document.getElementById('registrationForm');
const universitySelect = document.getElementById('university');
const otherUniversityGroup = document.getElementById('otherUniversityGroup');
const otherUniversityInput = document.getElementById('otherUniversity');
const toast = document.getElementById('toast');
const successModal = document.getElementById('successModal');

function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}

universitySelect.addEventListener('change', () => {
    if (universitySelect.value === 'other') {
        otherUniversityGroup.style.display = 'block';
        otherUniversityInput.required = true;
    } else {
        otherUniversityGroup.style.display = 'none';
        otherUniversityInput.required = false;
    }
});

function showSuccessModal() {
    successModal.className = 'modal show';
}

function closeModal() {
    successModal.className = 'modal';
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token'); 
    if (!token) {
        showToast('You must be logged in to register!', 'error');
        return;
    }

    const formData = {
        event: "65d8e7d9f1d5c03f707d2f5b",
        name: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    try {
        const response = await fetch("http://localhost:5000/api/registrations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById("qrCode").src = data.qrCodeUrl;
            showToast('Registration successful!');
            showSuccessModal();
            form.reset();
        } else {
            showToast(data.message || 'Registration failed!', 'error');
        }
    } catch (error) {
        showToast('Error connecting to server. Please try again.', 'error');
        console.error(error);
    }
});

window.onclick = function(event) {
    if (event.target === successModal) {
        closeModal();
    }
}