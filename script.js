// DOM Element Registration
const engineButton = document.getElementById('themeEngine');
const heroBtn = document.getElementById('heroBtn');
const actionShare = document.getElementById('actionShare');

// Smooth Scroll Setup for Hero Button
if (heroBtn) {
    heroBtn.addEventListener('click', () => {
        document.getElementById('coreDiscovery').scrollIntoView({ behavior: 'smooth' });
    });
}

// Persistent Theme Handling
if (localStorage.getItem('theme-selection') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    engineButton.textContent = 'LIGHT MODE';
}

engineButton.addEventListener('click', () => {
    const activeMode = document.documentElement.getAttribute('data-theme');
    if (activeMode === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        engineButton.textContent = 'DARK MODE';
        localStorage.setItem('theme-selection', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        engineButton.textContent = 'LIGHT MODE';
        localStorage.setItem('theme-selection', 'dark');
    }
});

// Clipboard Share Link Integration
if (actionShare) {
    actionShare.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href);
        alert('Webpage URL successfully copied to clipboard! Ready for your submission profile.');
    });
}