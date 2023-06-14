// Retrieve the saved theme from local storage
const savedTheme = localStorage.getItem('selectedTheme');

// Set the initial theme based on the saved theme or default to "light"
const selectedTheme = savedTheme || 'light';
document.documentElement.setAttribute('data-theme', selectedTheme);

// Get the theme radio buttons
const themeRadios = document.querySelectorAll('input[name="theme"]');

// Add event listeners to theme radio buttons
themeRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    const selectedTheme = radio.value;
    document.documentElement.setAttribute('data-theme', selectedTheme);
    localStorage.setItem('selectedTheme', selectedTheme);
  });
});
