import { Theme, STORAGE_THEME_KEY, refs } from './constants.js';

const { $body, $themeTogleBtn } = refs;

$themeTogleBtn.addEventListener('change', handleChangeTheme);

function handleChangeTheme({ target }) {
  const { checked } = target;

  checked
    ? $body.classList.replace(Theme.LIGHT, Theme.DARK)
    : $body.classList.replace(Theme.DARK, Theme.LIGHT);

  const theme = checked ? Theme.DARK : Theme.LIGHT;
  localStorage.setItem(STORAGE_THEME_KEY, theme);
}

function getCurrentTheme() {
  const selectedTheme = localStorage.getItem(STORAGE_THEME_KEY);
  return selectedTheme ? selectedTheme : Theme.LIGHT;
}

function initTheme() {
  const theme = getCurrentTheme();
  $body.classList.add(theme);
}

initTheme();
