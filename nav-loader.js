fetch("/components/navigation.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navigation-placeholder").innerHTML = data;
    });

fetch("/components/mobile-navigation.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("mobile-navigation-placeholder").innerHTML = data;

        // re-run nav JS AFTER injection
        initNavigation();

    });

function initNavigation() {
    const menuButton = document.getElementById("menu-button");
    const closeButton = document.getElementById("close-button");
    const overlay = document.getElementById("menu-overlay");

    if (!menuButton || !closeButton || !overlay) return;

    menuButton.addEventListener("click", function () {
        overlay.classList.add("active");
    });

    closeButton.addEventListener("click", function () {
        overlay.classList.remove("active");
    });
}