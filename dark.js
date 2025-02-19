const darkModeToggle = document.getElementById('darkModeToggle');

function updateDarkMode() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateDarkMode();
});

function init() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        document.body.classList.add('dark-mode');
    }
    updateDarkMode();
}

init();
