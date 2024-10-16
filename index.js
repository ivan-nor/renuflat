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
const servicesTabButtons = document.querySelectorAll('#services-tabs button')
const servicesTabPanels = document.querySelectorAll('.services-tabpanel')
const renovationsTabButtons = document.querySelectorAll('#renovations-tabs button')
const renovationsTabPanels = document.querySelectorAll('.renovations-tabpanel')

for (const tab of renovationsTabButtons) {
  tab.addEventListener('click', (e) => {
    for (const tabEl of renovationsTabButtons) {
      tabEl.setAttribute('aria-selected', 'false')
    }
    for (const tabpanel of renovationsTabPanels) {
      tabpanel.classList.remove('active')
    }
    const activeTabElement = document.querySelector('#renovations-tabs button[tabindex="0"]')
    const activeTabId = activeTabElement.id
    const activeTabControls = tab.getAttribute('aria-controls')
    const tabPanel = document.getElementById(activeTabControls);
    console.log(activeTabControls, tabPanel);
    tabPanel.classList.add('active')

    if (e.target.id !== activeTabId)  {
      activeTabElement.setAttribute('tabindex', '-1')
      activeTabElement.setAttribute('aria-selected', 'true')
      e.target.setAttribute('tabindex', '0')
    }
  })
}

for (const tab of servicesTabButtons) {
  tab.addEventListener('click', (e) => {
    for (const tabEl of servicesTabButtons) {
      tabEl.setAttribute('aria-selected', 'false')
    }
    for (const tabpanel of servicesTabPanels) {
      tabpanel.classList.remove('active')
    }
    const activeTabElement = document.querySelector('#services-tabs button[tabindex="0"]')
    const activeTabId = activeTabElement.id
    const activeTabControls = tab.getAttribute('aria-controls')
    const tabPanel = document.getElementById(activeTabControls);
    tabPanel.classList.add('active')

    if (e.target.id !== activeTabId)  {
      activeTabElement.setAttribute('tabindex', '-1')
      activeTabElement.setAttribute('aria-selected', 'true')
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
scrollButton.hide();
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

const faqButtons = document.querySelectorAll('.faq-item-button')
const faqItemsBody = document.querySelectorAll('.faq-item-body')
// console.log(faqButtons);
for (button of faqButtons) {
  button.addEventListener('click', (e) => {
    const targetText = e.target.parentNode.parentNode.parentNode.querySelector('.faq-item-body');

    for (button of faqButtons) {
      button.classList.remove('rotate-180')
    }
    for (textElement of faqItemsBody) {
      if (targetText != textElement) {
        textElement.classList.add('hide')
      }
    }

    if (targetText.classList.contains('hide')) {
      targetText.classList.remove('hide')
      e.target.classList.add('rotate-180');
    } else {
      targetText.classList.add('hide')
      e.target.classList.remove('rotate-180');
    }
  })
}
