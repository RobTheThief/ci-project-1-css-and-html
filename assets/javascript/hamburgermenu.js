let hamburger_menu = document.getElementById("hamburger_menu");

function toggleMenu () {
    hamburger_menu.classList.toggle("hamburger_visible");
}

function closeMenu () {
    hamburger_menu.classList.remove("hamburger_visible");
}

document.body.addEventListener("scroll", function() { closeMenu() }, false);