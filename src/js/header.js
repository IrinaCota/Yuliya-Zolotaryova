document.addEventListener('DOMContentLoaded', () => {
  const menuNav = document.querySelector('.menu-tab'); // Кнопка для меню на десктопі
  const menu = document.querySelector('.menu'); // Десктопне меню
  const openModalBtn = document.querySelector('.menu-mob-btn'); // Кнопка для відкриття мобільного меню
  const closeModalBtn = document.querySelector('.close_menu_btn'); // Кнопка закриття мобільного меню
  const modal = document.querySelector('.mob-menu'); // Мобільне меню
  const menuLinks = document.querySelectorAll('.mob-menu-anchor'); // Посилання в мобільному меню

  // Відкриття/закриття десктопного меню
  if (menuNav && menu) {
    menuNav.addEventListener('click', () => {
      menu.classList.toggle('is-hidden');
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('is-hidden');
      });
    });
  }

  // Відкриття мобільного меню
  if (openModalBtn && modal) {
    openModalBtn.addEventListener('click', () => {
      modal.classList.remove('is-hidden');
      document.documentElement.classList.add('is-modal-open'); // Блокує прокрутку сторінки
    });
  }

  // Закриття мобільного меню
  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.add('is-hidden');
      document.documentElement.classList.remove('is-modal-open'); // Дозволяє прокрутку сторінки
    });
  }

  // Закриття мобільного меню при кліку на посилання
  if (menuLinks) {
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        modal.classList.add('is-hidden');
        document.documentElement.classList.remove('is-modal-open');
      });
    });
  }
});
