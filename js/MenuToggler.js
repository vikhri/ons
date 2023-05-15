const selectors = {
  menu: '.menu',
  toggleButton: '.top-header__menu-toggle-button'
}

const states = {
  close: 'is-closed'
}

const menu = document.querySelector(selectors.menu);
const button = document.querySelector(selectors.toggleButton);


const HeaderToggler = () => {

  button.addEventListener('click', () => {

    console.log('click')

    const isClosed = menu.classList.contains(states.close);

    menu.classList.toggle(states.close, !isClosed);

  })
};

export default HeaderToggler;