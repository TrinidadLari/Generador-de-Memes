document.addEventListener('DOMContentLoaded', () => {
    const buttonDarkTheme = document.getElementById('buttonDarkTheme');
    const buttonLightTheme = document.getElementById('buttonLightTheme');
    const body = document.body;
    const header = document.querySelector('header');
    const nav = document.querySelector('.generalPanel__nav');

    buttonDarkTheme.addEventListener('click', () => {
      body.classList.add('darkTheme');
      header.classList.add('darkHeader');
      nav.classList.add('darkNav');

      buttonDarkTheme.style.display = 'none';
      buttonLightTheme.style.display = 'inline-flex';
    });

    buttonLightTheme.addEventListener('click', () => {
      body.classList.remove('darkTheme');
      header.classList.remove('darkHeader');
      nav.classList.remove('darkNav');

      buttonLightTheme.style.display = 'none';
      buttonDarkTheme.style.display = 'inline-flex';
    });
  });

