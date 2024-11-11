const dropdownOpenButton = document.querySelector('.main-header-burger-button')
const dropdownCloseButton = document.querySelector('.cross-button')
const dropdownMenuElement = document.querySelector('.main-header-menu')
const mainHeaderButton = document.querySelector('.main-header-button')
// const header = document.querySelector('.main-header')
// console.log(header);
// document.addEventListener('focusout', e => console.log(e.target))

// header.addEventListener('focusout', (e) => {
//   console.log('header blur');
//   dropdownMenuElement.classList.toggle('mobile-hidden')
//   mainHeaderButton.classList.toggle('mobile-hidden')
//   dropdownOpenButton.classList.remove('hide')
//   dropdownCloseButton.classList.add('hide')
// })
dropdownOpenButton.addEventListener('click', (e) => {
  // header.focus()
  dropdownMenuElement.classList.toggle('mobile-hidden')
  mainHeaderButton.classList.toggle('mobile-hidden')
  dropdownOpenButton.classList.add('hide')
  dropdownCloseButton.classList.remove('hide')
})
dropdownCloseButton.addEventListener('click', (e) => {
  dropdownMenuElement.classList.add('mobile-hidden')
  mainHeaderButton.classList.add('mobile-hidden')
  dropdownCloseButton.classList.add('hide')
  dropdownOpenButton.classList.remove('hide')
})

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
    tabPanel.classList.add('active')

    if (e.target.id !== activeTabId) {
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

    if (e.target.id !== activeTabId) {
      activeTabElement.setAttribute('tabindex', '-1')
      activeTabElement.setAttribute('aria-selected', 'true')
      e.target.setAttribute('tabindex', '0')
    }
  })
}

const scrollButton = {
  el: document.querySelector('.scroll-button'),
  show() {
    this.el.classList.remove('hide');
  },
  hide() {
    this.el.classList.add('hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.scroll-button').onclick = () => {
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

const faqItems = document.querySelectorAll('.faq-item')
const faqItemDescriptions = document.querySelectorAll('.faq-item-description')
const faqButtons = document.querySelectorAll('.faq-item-button');
for (item of faqItems) {
  item.addEventListener('click', (e) => {
    const targetDescription = e.currentTarget.querySelector('.faq-item-description');

    for (element of faqItems) {
      const elButton = element.querySelector('.faq-item-button')
      const elDescription = element.querySelector('.faq-item-description')

      if (elDescription === targetDescription) {
        if (elDescription.classList.contains('hide')) {
          elButton.classList.add('rotate-180');
          elDescription.classList.remove('hide')
        } else {
          elButton.classList.remove('rotate-180');
          elDescription.classList.add('hide')
        }
      } else {
        elButton.classList.remove('rotate-180');
        elDescription.classList.add('hide')
      }
    }
  })
}

const state = {
  isChatsActive: false,
  modal: false,
}
const chatButton = document.getElementById('chat-button');
const chatButtons = document.querySelectorAll('#chat-button ~ .chat-button');
const showModalButton = chatButtons[chatButtons.length - 1]
const fixedButtons = document.querySelector('.fixed-buttons')

const showModal = (e) => {
  state.modal = !state.modal
  console.log('show modal', state.modal);
}

const handleChats = (e) => {
  chatButtons.forEach((button, index) => {
    if (!state.isChatsActive) {
      if (index === 2) {
        // fixedButtons.style.gap = '20px'
        chatButton.querySelector('.icon > img').src = "/assets/icons/cross.svg"
        state.isChatsActive = !state.isChatsActive
      } 
    } else {
      if (index === 2) {
        // fixedButtons.style.gap = '10px'
        chatButton.querySelector('.icon > img').src = "/assets/icons/chat.svg"
        state.isChatsActive = !state.isChatsActive
      } 
    }
    button.classList.toggle('hide')
  })
}

// showModalButton.style.display = 'none'
chatButton.addEventListener('click', handleChats)
showModalButton.addEventListener("click", showModal)


// ВЫЧИСЛЕНИЕ ОТСТУПА MAIN
window.addEventListener('load', updateMainMargin);
window.addEventListener('resize', updateMainMargin);
function updateMainMargin() {
  const headerHeight = document.querySelector('header').offsetHeight;
  document.querySelector('main').style.paddingTop = `${headerHeight}px`;
}

// ОБРАБОТКА ПАГИНАЦИИ ПРОЕКТОВ
const projectsPaginationButton = document.querySelector('.projects-pagination-button')
projectsPaginationButton.addEventListener('click', () => {
  const hiddenProject = document.querySelector('.project.hide')
  if (hiddenProject) {
    hiddenProject.classList.remove('hide')
  }
})