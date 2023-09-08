document.addEventListener("DOMContentLoaded", function() {
    let prevScrollPos = window.pageYOffset;

    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        const navbar = document.querySelector(".navbar");

        if (currentScrollPos < 100) {
            navbar.style.top = "-60px";
        } else {
            navbar.style.top = "0";
        }
        prevScrollPos = currentScrollPos;
    };
});