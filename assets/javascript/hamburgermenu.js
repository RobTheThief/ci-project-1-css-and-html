let menu = document.getElementById("menu");

function toggleMenu () {
    menu.classList.toggle("hamburger_visible");
}

function closeMenu () {
    menu.classList.remove("hamburger_visible");
}

document.body.addEventListener("scroll", function() { closeMenu() }, false);