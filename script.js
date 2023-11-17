// script.js

document.addEventListener("DOMContentLoaded", function () {
    var navItems = document.querySelectorAll("nav a");

    navItems.forEach(function (item) {
        item.addEventListener("mouseover", function () {
            item.style.color = "orange";
        });

        item.addEventListener("mouseout", function () {
            item.style.color = "white";
        });
    });
});
