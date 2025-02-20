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

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        university: universitySelect.value === 'other' ? otherUniversityInput.value : universitySelect.value,
        registrationDate: new Date().toISOString()
    };

    try {
        const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
        registrations.push(formData);
        localStorage.setItem('registrations', JSON.stringify(registrations));
        
        showToast('Registration successful!');
        showSuccessModal();
        form.reset();
    } catch (error) {
        showToast('Error saving registration. Please try again.', 'error');
        console.error(error);
    }
});

window.onclick = function(event) {
    if (event.target === successModal) {
        closeModal();
    }
}