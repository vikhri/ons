const selectors = {
  menu: '.menu',
  form: '.nav-search',
  openButton: '.nav__search-button',
  closeButton: '.nav-search__button--close'

}

const states = {
  hidden: 'visually-hidden',
}

const form = document.querySelector(selectors.form);
const openButton = document.querySelector(selectors.openButton);
const closeButton = document.querySelector(selectors.closeButton);
const menu = document.querySelector(selectors.menu);


const SearchToggler = () => {

  openButton.addEventListener('click', () => {
    form.classList.remove(states.hidden);
    menu.classList.add(states.hidden);
    openButton.classList.add(states.hidden);
  })

  closeButton.addEventListener('click', (evt) => {

    evt.preventDefault();

    form.classList.add(states.hidden);
    menu.classList.remove(states.hidden);
    openButton.classList.remove(states.hidden);
  })

};

export default SearchToggler;