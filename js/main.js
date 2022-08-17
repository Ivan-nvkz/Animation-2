'use strict';

document.addEventListener('DOMContentLoaded', () => {

   //  ======================================================================================

   const flagPicturesBox = document.querySelector('.flag-pictures__box ');
   const flagImgs = document.querySelectorAll('.flag__img');

   window.addEventListener('load', function () {

      setTimeout(function () {
         flagImgs.forEach(flagImg => {
            flagImg.classList.add('flag__img--active');
         });
      }, 3000);

      setTimeout(function () {
         flagPicturesBox.classList.add('flag-pictures__box--active');
      }, 5500);

   });


   // Меню бургер ======================================================================================

   const iconMenu = document.querySelector(".icon-menu");
   const menuBody = document.querySelector(".menu__list");

   if (iconMenu) {
      iconMenu.addEventListener("click", function (e) {
         document.body.classList.toggle("_lock");
         iconMenu.classList.toggle("menu-open");
         menuBody.classList.toggle("menu-open");
         menuBody.classList.toggle('menu__list--active');
      });
   }
   if (menuBody) {
      menuBody.addEventListener('click', function () {
         iconMenu.classList.remove("menu-open");
         menuBody.classList.remove("menu__list--active");
         menuBody.classList.remove("menu-open");
         document.body.classList.remove("_lock");
      });
   }

   // Валидация формы =====================================================================================
   //  Поле "Имя"
   const MIN_NAME_LENGTH = 4;
   const MAX_NAME_LENGTH = 12;

   let stopSumb = (/[!@#$%^&*()]/);


   let searcHeaderInput = document.querySelector('.search-header__input');

   //  Вариант с событием 'input'
   searcHeaderInput.addEventListener('input', () => {
      const valueLength = searcHeaderInput.value.length;

      if (valueLength < MIN_NAME_LENGTH) {
         searcHeaderInput.setCustomValidity('Ещё' + ' ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');

      } else if (valueLength > MAX_NAME_LENGTH) {
         searcHeaderInput.setCustomValidity('Удалите лишнее' + (valueLength - MAX_NAME_LENGTH) + 'симв.');

      } else {
         searcHeaderInput.setCustomValidity('');
      }

      searcHeaderInput.reportValidity();

   });

   //  Запрет на ввод символов  !@#$%^&*() =========================

   searcHeaderInput.addEventListener('input', function () {

      this.value = this.value.replace(stopSumb, '');

   });


   // Получаем текст в массив randomtext =============================

   fetch('https://baconipsum.com/api/?type=lucky')

      .then(function (resp) { return resp.json(); })
      .then(function (randomtext) {
         // console.log(randomtext);

         setTimeout(function () {

            setInterval(function () {
               // document.querySelector('.header__content-description').textContent = randomtext[Math.floor(Math.random() * randomtext.length)];
               let description = document.querySelector('.header__content-description');
               description.textContent = randomtext[Math.floor(Math.random() * randomtext.length)];

            }, 2500);

         }, 5500);

      })


      .catch(function () {
         //Обрабатываем ошибки
      });


   //  ======================================================================================

   const menuItems = document.querySelectorAll('.menu__list-item');

   if (menuItems.length) {
      menuItems.forEach(function (menuItem) {
         menuItem.addEventListener('mouseover', function () {
            menuItem.style.filter = 'drop-shadow(0px 0px 15px blue)';
            menuItem.style.transition = '0.3s';
         });
      });
   }

   if (menuItems.length) {
      menuItems.forEach(function (menuItem) {
         menuItem.addEventListener('mouseout', function () {
            menuItem.style.filter = 'none';
         });
      });
   }


   // Проверка на наличие класса ==============================================================

   const headerContentTitle = document.querySelector('.header__content-title');

   if (headerContentTitle && headerContentTitle.classList.contains('header__content-title')) {
      // console.log('есть такой класс');
   } else {
      // console.log(' такого класса нет');
   }

   // console.log(headerContentTitle);

   //  ======================================================================================
   //  ======================================================================================

   const snowmobileSelect = document.querySelector('.snowmobile-select');
   const out = document.querySelector('.out');
   const outTotal = document.querySelector('.out-total');

   let targetElement;
   // let a;

   // snowmobileSelect.addEventListener('change', function () {
   //    let a = Number(snowmobileSelect.value);
   //    console.log(a);
   //    return a;
   // });

   // outTotal.innerHTML = a;

   document.addEventListener('change', f1);

   function f1(e) {
      let targetElement = e.target;
      // if (targetElement.closest('.snowmobile-select')) {
      out.innerHTML = targetElement.value;
      // return targetElement.value;
      // console.log(targetElement.value);
      // console.log(targetElement.type);
      // console.log(targetElement);
      // return targetElement.value;
      return targetElement.value;
      // }
   }

   // f1();

   // outTotal.innerHTML = f1();
   // console.log(f1);
   // console.log(targetElement);


   // let sum = 10;
   // function f2() {
   //    let sum = 5 + 13;
   //    return sum;
   // }
   // f2();
   // console.log(f2());
   // outTotal.innerHTML = f2();
   //  ======================================================================================

   //  ======================================================================================
   // section-14  start  ====================================================================

   // Размеры
   let block14 = document.querySelector('.block-14');

   // Ширина
   let block14Width = block14.offsetWidth;
   // console.log(`Ширина объекта: ${block14Width}px`);

   // Высота
   let block14Height = block14.offsetHeight;
   // console.log(`Высота объекта: ${block14Height}px`);

   // Задача : В момент достижения блока шапка отлипает.
   // Решение:
   // 1) Слушать скролл страницы.
   // 2) Измерять положение целевого блока
   // 3) В нужный момент работать с класами шапки

   // Получаем объекты
   const headerTop = document.querySelector('.header__top');
   const sectionBody14 = document.querySelector('.section-body-14');
   // Получаем высоту шапки
   const headerHeight = headerTop.offsetHeight;
   // console.log(headerHeight);

   // sectionBody14.getBoundingClientRect().top
   // sectionBody14.getBoundingClientRect().left

   // Событие прокрутки окна
   // Событие скролл вешаем только на window
   window.addEventListener('scroll', setHeaderStyle);

   function setHeaderStyle(e) {
      // Количество прокрученных пикселей
      // window.scrollY
      // window.scrollX

      const moment = headerHeight + 10;

      // console.log(sectionBody14.getBoundingClientRect().top);
      // console.log(moment);
      // console.log(window.scrollY);
      // console.log(window.scrollX);

      if (sectionBody14.getBoundingClientRect().top <= moment) {
         headerTop.style.top = `${sectionBody14.offsetTop - moment}px`;
         // headerTop.classList.remove('header__top');
         // console.log('сработало');
         // console.log(sectionBody14.offsetTop);
         // console.log(headerTop.style.top = `${sectionBody14.offsetTop - moment}px`);
      } else {
         headerTop.style.top = ``;
         // headerTop.classList.add('header__top');
      }
      // console.log(` объект ниже верхней части экрана на :  ${sectionBody14.getBoundingClientRect().top} px`);
      // console.log(`Момент ${moment} px`);

   }

   // section-14  end    ====================================================================












































});



