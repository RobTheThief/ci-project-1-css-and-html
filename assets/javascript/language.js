let html = document.getElementById("html");
let h1_left = document.getElementById("h1_left");
let h1_right = document.getElementById("h1_right");
let home = document.getElementById("home");
let about = document.getElementById("about");
let videos = document.getElementById("videos");
let contact = document.getElementById("contact");
let welcome_msg_1 = document.getElementById("welcome_msg_1");
let welcome_msg_2 = document.getElementById("welcome_msg_2");
let language_button = document.getElementById("language_button");

const siteTextEnglish = {
    home: 'Home',
    about: 'About',
    videos: 'Videos',
    contact: 'Contact',
    welcome_msg_1: 'Welcome to An Tobair Segais!',
    welcome_msg_2: 'Click here to learn more',
}

const siteTextPortuguese = {
    home: 'Início',
    about: 'Sobre',
    videos: 'Vídeos',
    contact: 'Contato',
    welcome_msg_1: 'Bem-vindo a An Tobair Segais!',
    welcome_msg_2: 'Clique aqui para saber mais',
}

const setLanguage = () => {
    if (html.getAttribute('lang') == "en"){
        html.setAttribute('lang', 'pt');
        language_button.style.cssText += 'background-image: url(assets/images/unionjackflag20x40.png);';
        home.innerHTML = siteTextPortuguese.home;
        about.innerHTML = siteTextPortuguese.about;
        videos.innerHTML = siteTextPortuguese.videos;
        contact.innerHTML = siteTextPortuguese.contact;
        welcome_msg_1.innerHTML = siteTextPortuguese.welcome_msg_1;
        welcome_msg_2.innerHTML = siteTextPortuguese.welcome_msg_2;
    } else {
        html.setAttribute('lang', 'en');
        language_button.style.cssText += "background-image: url(assets/images/braziltumbnail20x40.png);";
        home.innerHTML = siteTextEnglish.home;
        about.innerHTML = siteTextEnglish.about;
        videos.innerHTML = siteTextEnglish.videos;
        contact.innerHTML = siteTextEnglish.contact;
        welcome_msg_1.innerHTML = siteTextEnglish.welcome_msg_1;
        welcome_msg_2.innerHTML = siteTextEnglish.welcome_msg_2;
    }
}
