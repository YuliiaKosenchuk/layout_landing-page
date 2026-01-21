1. Use the logo as a favicon
2. Use the landing name as a page title
3. All logos should be links to the top of the page
4. Change text color on hover for phone, email, and address
5. Make sure phone icons and phone numbers are real links to start a call
6. All addresses should be links to some location on Google Maps. Open them in a new tab with `target="_blank"`.
7. Increase all images on hover (make them links to #, if there is no better option)
8. Make sure everything looks neat on mobile and without horizontal scrolling
9. The speed of animations should be the same throughout the page (for example, increasing when hovering or moving blocks when scrolling)
10. Ensure that all `nav__links` work smoothly
11. Disable page scrolling under the menu using the next code:
    ```css
    .page:has(.page__menu:target) {
      overflow: hidden; /* not to scroll the page */
    }
    ```
12. Make it possible to scroll the menu if it is higher than the viewport;
    ```css
    .menu {
      overflow: auto; /* to scroll the menu if needed */
    }
    .menu__top {
      position: sticky; /* to keep cross always visible */
      top: 0;
      z-index: 1;
      background-color: #e5e5e5;
    }
    ```
13. All form fields should be required and have correct types (`email`, `tel`, etc.)
14. Placeholders should give examples of what should be added, to make the expected format clear
15. The page shouldn't be reloaded on form submit, but the fields should be cleared. Use:
    ```html
    <form onsubmit="this.reset(); return false;">
    ```
16. Make the `footer` sticky at the bottom with `z-index: -1` to get a `fixed` background effect.


Ось переклад на **українську мову**:

1. Використовуй логотип як favicon.
2. Використовуй назву лендінгу як заголовок сторінки.
3. Усі логотипи мають бути посиланнями на верхню частину сторінки.
4. Зміни колір тексту при наведенні на телефон, електронну пошту та адресу.
5. Переконайся, що іконки телефону та номери телефонів — це реальні посилання для здійснення дзвінка.
6. Усі адреси мають бути посиланнями на певне місце в Google Maps. Відкривай їх у новій вкладці з `target="_blank"`.
7. Збільшуй усі зображення при наведенні (зроби їх посиланнями на `#`, якщо немає кращого варіанту).
8. Переконайся, що все виглядає акуратно на мобільних пристроях та **без горизонтального скролу**.
9. Швидкість анімацій має бути однаковою на всій сторінці (наприклад, при наведенні або переміщенні блоків під час скролу).
10. Переконайся, що всі `nav__links` працюють плавно.
11. Заблокуй прокручування сторінки під відкритим меню, використовуючи такий код:
    ```css
    .page:has(.page__menu:target) {
      overflow: hidden; /* щоб не прокручувалася сторінка */
    }
    ```
12. Зроби можливим прокручування меню, якщо воно вище за вікно перегляду:
    ```css
    .menu {
      overflow: auto; /* щоб прокручувалося меню, якщо потрібно */
    }
    .menu__top {
      position: sticky; /* щоб хрестик був завжди видимий */
      top: 0;
      z-index: 1;
      background-color: #e5e5e5;
    }
    ```
13. Усі поля форми мають бути обов'язковими (`required`) і з правильними типами (`email`, `tel` тощо).
14. Placeholder-и мають показувати приклади очікуваних значень, щоб було зрозуміло, у якому форматі вводити.
15. Сторінка не повинна перезавантажуватися при відправленні форми, але поля мають очищуватися. Використовуй:
    ```html
    <form onsubmit="this.reset(); return false;">
    ```
16. Зроби `footer` "липким" унизу з `z-index: -1`, щоб отримати ефект фону, що фіксується:
    ```css
    footer {
      position: sticky;
      bottom: 0;
      z-index: -1;
    }
    ```

