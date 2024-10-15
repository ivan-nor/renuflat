// выпадающее меню хедера
const dropdownOpenButton = document.querySelector('.main-header-burger-button')
const dropdownCloseButton = document.querySelector('.cross-button')
const dropdownMenuElement = document.querySelector('.dropdown-menu')

dropdownMenuElement.addEventListener('blur', (e) => {
  dropdownMenuElement.classList.add('visually-hidden')
  dropdownOpenButton.classList.toggle('visually-hidden')
})

dropdownOpenButton.addEventListener('click', (e) => {
  dropdownMenuElement.classList.toggle('visually-hidden')
  dropdownMenuElement.focus()
  dropdownOpenButton.classList.add('visually-hidden')
})

dropdownCloseButton.addEventListener('click', (e) => {
  dropdownMenuElement.classList.add('visually-hidden')
  dropdownOpenButton.classList.toggle('visually-hidden')
})

// переключение вкладок 
const servicesTabElements = document.querySelectorAll('#services-tabs button')
const renovationsTabElements = document.querySelectorAll('#renovations-tabs button')

// console.log(tabElements)

for (const tab of renovationsTabElements) {
  tab.addEventListener('click', (e) => {
    const activeTabElement = document.querySelector('#renovations-tabs button[tabindex="0"]')
    const activeTabId = activeTabElement.id
    console.log('click', e.target.id, activeTabId)
    if (e.target.id !== activeTabElement)  {
      activeTabElement.setAttribute('tabindex', '-1')
      e.target.setAttribute('tabindex', '0')
    }
  })
}
for (const tab of servicesTabElements) {
  tab.addEventListener('click', (e) => {
    const activeTabElement = document.querySelector('#services-tabs button[tabindex="0"]')
    const activeTabId = activeTabElement.id
    if (e.target.id !== activeTabElement)  {
      activeTabElement.setAttribute('tabindex', '-1')
      e.target.setAttribute('tabindex', '0')
    }
  })
}

const scrollButton = {
  el: document.querySelector('.scroll-button'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.scroll-button').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

scrollButton.addEventListener();

const subDropdowns = document.querySelectorAll('.sub-menu')

for (const subDropdown of subDropdowns) {
  subDropdown.addEventListener("mouseenter", (e) => {
    const subDropdownList = subDropdown.querySelector('.sub-menu-list')
    subDropdownList.classList.remove('hide');
  });
  subDropdown.addEventListener("mouseleave", (e) => {
    const subDropdownList = subDropdown.querySelector('.sub-menu-list')
    subDropdownList.classList.add('hide');
  });
}
