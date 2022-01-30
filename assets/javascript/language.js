let html = document.getElementById("html");
let h1_left = document.getElementById("h1_left");
let h1_right = document.getElementById("h1_right");
let home = document.getElementById("home");
let about = document.getElementById("about");
let videos = document.getElementById("videos");
let contact = document.getElementById("contact");

const siteTextEnglish = {
    home: 'Home',
    about: 'About',
    videos: 'Videos',
    contact: 'Contact'
}

const siteTextPortuguese = {
    home: 'Início',
    about: 'Sobre',
    videos: 'Vídeos',
    contact: 'Contato'
}

const setEnglish = () => {
    html.setAttribute('lang', 'en');
    home.innerHTML = siteTextEnglish.home;
    about.innerHTML = siteTextEnglish.about;
    videos.innerHTML = siteTextEnglish.videos;
    contact.innerHTML = siteTextEnglish.contact;
}

const setPortugese = () => {
    html.setAttribute('lang', 'pt');
    home.innerHTML = siteTextPortuguese.home;
    about.innerHTML = siteTextPortuguese.about;
    videos.innerHTML = siteTextPortuguese.videos;
    contact.innerHTML = siteTextPortuguese.contact;
}