const dropdownOpenButton = document.querySelector('.header-burger-button')
const dropdownCloseButton = document.querySelector('.cross-button')
const dropdownElement = document.querySelector('.dropdown')

dropdownElement.addEventListener('blur', (e) => {
  dropdownElement.classList.add('visually-hidden')
  dropdownOpenButton.classList.toggle('visually-hidden')
})

dropdownOpenButton.addEventListener('click', (e) => {
  dropdownElement.classList.toggle('visually-hidden')
  dropdownElement.focus()
  dropdownOpenButton.classList.add('visually-hidden')
})


dropdownCloseButton.addEventListener('click', (e) => {
  dropdownElement.classList.add('visually-hidden')
  dropdownOpenButton.classList.toggle('visually-hidden')
})

