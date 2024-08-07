//This is custom JAGS code for creating mega hover menu on entire site. Code is link to the header.liquid file//

let items = document
        .querySelector(".header__inline-menu")
        .querySelectorAll("details");
    items.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.setAttribute("open", true);
            item.querySelector("summary").setAttribute("aria-expanded", "true");
            item.addEventListener("mouseout", () => {
                item.removeAttribute("open");
                item.querySelector("summary").setAttribute("aria-expanded", "false");
            });
        });
    });

// *************************************************************************TEST DATA****************************************************************************************************************
// let showDelay = 300, hideDelay = 800;
// let menuEnterTimer, menuLeaveTimer;

// let items = document
//         .querySelector(".header__inline-menu")
//         .querySelectorAll("details");
//     items.forEach((item) => {
//         item.addEventListener("mouseover", () => {
//             clearTimeout(menuLeaveTimer);
//             item.setAttribute("open", true);
//             item.querySelector("summary").setAttribute("aria-expanded", "true");
//             menuEnterTimer = setTimeout(function() {
//               item.classList.add('active');
//             }, showDelay);
//             item.addEventListener("mouseout", () => {
//                 item.removeAttribute("open");
//                 item.querySelector("summary").setAttribute("aria-expanded", "false");
//                 menuLeaveTimer = setTimeout(function() {
//                   item.classList.remove('active');
//                   }, hideDelay);
//                 })
//             });
//         });