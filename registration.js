// DOM Elements
const form = document.getElementById('registrationForm');
const universitySelect = document.getElementById('university');
const otherUniversityGroup = document.getElementById('otherUniversityGroup');
const otherUniversityInput = document.getElementById('otherUniversity');
const toast = document.getElementById('toast');
const successModal = document.getElementById('successModal');

// Show toast message
function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}

// Handle university selection
universitySelect.addEventListener('change', () => {
    if (universitySelect.value === 'other') {
        otherUniversityGroup.style.display = 'block';
        otherUniversityInput.required = true;
    } else {
        otherUniversityGroup.style.display = 'none';
        otherUniversityInput.required = false;
    }
});

// Show success modal with QR code
function showSuccessModal() {
    successModal.className = 'modal show';
}

// Close modal
function closeModal() {
    successModal.className = 'modal';
}

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        university: universitySelect.value === 'other' ? otherUniversityInput.value : universitySelect.value,
        registrationDate: new Date().toISOString()
    };

    // Store in localStorage
    try {
        const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
        registrations.push(formData);
        localStorage.setItem('registrations', JSON.stringify(registrations));
        
        showToast('Registration successful!');
        showSuccessModal(); // Show the modal with QR code
        form.reset();
    } catch (error) {
        showToast('Error saving registration. Please try again.', 'error');
        console.error(error);
    }
});

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === successModal) {
        closeModal();
    }
}