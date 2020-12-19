import { refs } from 'constants.js';
import CardsTemplate from './menuCards/card.hbs';
import cards from './menu.json';

const { $menuList } = refs;

function createMarkup() {
  return CardsTemplate(cards);
}

function renderMarkup() {
  const markup = createMarkup();
  $menuList.insertAdjacentHTML('beforeed', markup);
}

renderMarkup();
