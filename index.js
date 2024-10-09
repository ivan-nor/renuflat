// выпадающее меню хедера
const dropdownOpenButton = document.querySelector('.main-header-burger-button')
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

// переключение вкладок 
const tabElements = document.querySelectorAll('#tabs button')
console.log(tabElements)
for (const tab of tabElements) {
  console.log(tab)

  tab.addEventListener('click', (e) => {
    const activeTabElement = document.querySelector('button[tabindex="0"]')
    const activeTabId = activeTabElement.id
    console.log('click', e.target.id, activeTabId)
    if (e.target.id !== activeTabElement)  {
      activeTabElement.setAttribute('tabindex', '-1')
      e.target.setAttribute('tabindex', '0')
    }
  })
}

