const selectors = {
  popup: '.popup-wrapper',
  closeButton: '.auth-popup__exit-button',
  loginButton: '.top-header__login',
  overlay: '.overlay'
}

const states = {
  hidden: 'visually-hidden'
}

const popup = document.querySelector(selectors.popup);
const overlay = document.querySelector(selectors.overlay);
const closeButton = document.querySelector(selectors.closeButton);
const loginButton = document.querySelector(selectors.loginButton);


const ModalOpener = () => {

  // Open modal window
  loginButton.addEventListener('click', () => {
    popup.classList.remove(states.hidden)
  })

  // Close modal window
  closeButton.addEventListener('click', () => {
    popup.classList.add(states.hidden);
  })
  overlay.addEventListener('click', () => {
    popup.classList.add(states.hidden);
  })

  window.addEventListener("keydown", (e) => {
    if (e.key === 'Escape') {
      popup.classList.add(states.hidden);
    }
  })
};

ModalOpener();


