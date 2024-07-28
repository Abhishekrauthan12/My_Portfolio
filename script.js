document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('theme-toggle');
    const themeStylesheet = document.getElementById('theme-stylesheet');
    const currentTheme = localStorage.getItem('theme');
  
    if (currentTheme) {
      themeStylesheet.href = currentTheme;
      if (currentTheme.includes('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
      }
    }
  
    toggleButton.addEventListener('click', function () {
      if (themeStylesheet.href.includes('light-mode')) {
        themeStylesheet.href = 'dark-mode.css';
        toggleButton.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark-mode.css');
      } else {
        themeStylesheet.href = 'light-mode.css';
        toggleButton.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light-mode.css');
      }
    });
  });
  