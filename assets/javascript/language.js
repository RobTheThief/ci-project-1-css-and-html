let html = document.getElementById("html");
let home = document.getElementById("home");
let about = document.getElementById("about");
let contact = document.getElementById("contact");
let welcome_msg_1 = document.getElementById("welcome_msg_1");
let welcome_msg_2 = document.getElementById("welcome_msg_2");
let welcome_msg_3 = document.getElementById("welcome_msg_3");
let h1_right = document.getElementById("h1_right");  
let testimonials_section_heading = document.getElementById("testimonials_section_heading");
let testimonial_1 = document.getElementById("testimonial_1");
let testimonial_2 = document.getElementById("testimonial_2");
let testimonial_3 = document.getElementById("testimonial_3");
let testimonial_4 = document.getElementById("testimonial_4");
let contact_section_heading = document.getElementById("contact_section_heading");


let language_button = document.getElementById("language_button");

const siteTextEnglish = {
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    welcome_msg_1: 'Welcome to An Tobair Segais!',
    welcome_msg_2: 'Connecting people and..',
    welcome_msg_3: 'helping minds to grow',
    h1_right: 'AN TOBAIR SEGAIS - INTERPRETING MENTORS',
    testimonials_section_heading: 'TESTIMONIALS',
    testimonial_1: 'Most popular self help<br>content creaters online<br>interpreted',
    testimonial_2: 'Most popular self help<br>content creaters online<br>interpreted',
    testimonial_3: 'Most popular self help<br>content creaters online<br>interpreted',
    testimonial_4: 'Most popular self help<br>content creaters online<br>interpreted',
    about_section_heading: 'ABOUT',
    about_ats: 'An Tobar Segais Interpreting Mentors project started from the desire and ambition to bring educational mental health content to Portuguese speakers and share with English speakers a compilation of the most qualified mentors out there.<br>The main areas covered here are related to self-improvement based on psychology, neuroscience, stoicism, western and eastern philosophy.<br>Thank you for checking in. And, Keep improving',
    contact_section_heading: 'CONTACT',
}

const siteTextPortuguese = {
    home: 'Início',
    about: 'Sobre',
    contact: 'Contato',
    welcome_msg_1: 'Bem-vindo a An Tobair Segais!',
    welcome_msg_2: 'Conectando pessoas e..',
    welcome_msg_3: 'ajudando mentes a crescer',
    h1_right: 'AN TOBAIR SEGAIS - INTERPRETANDO MENTORES',
    testimonials_section_heading: 'TESTEMUNHOS',
    testimonial_1: 'Os criadores de conteúdo<br>de auto-ajuda mais<br>populares online<br>interpretados',
    testimonial_2: 'Os criadores de conteúdo<br>de auto-ajuda mais<br>populares online<br>interpretados',
    testimonial_3: 'Os criadores de conteúdo<br>de auto-ajuda mais<br>populares online<br>interpretados',
    testimonial_4: 'Os criadores de conteúdo<br>de auto-ajuda mais<br>populares online<br>interpretados',
    about_section_heading: 'SOBRE',
    about_ats: 'An Tobar Segais - Interpretando Mentores, nasceu do desejo e ambição de levar conteúdo educacional sobre saúde mental para falantes da língua portuguesa e compartilhar com falantes da língua inglesa uma compilação dos mais qualificados mentores disponíveis no Youtube.<br>As principais áreas abordadas aqui são relacionadas com aperfeiçoamento pessoal e auto-conhecimento, com base na psicologia, neurociência, estoicismo, filosofia ocidental e oriental.<br>Obrigada por aparecer por aqui. Continue se aperfeiçoando',
    contact_section_heading: 'CONTATO',
}

const setLanguage = () => {
    if (html.getAttribute('lang') == "en"){
        html.setAttribute('lang', 'pt');
        language_button.style.cssText += 'background-image: url(assets/images/unionjackflag20x40.png);';
        home.innerHTML = siteTextPortuguese.home;
        about.innerHTML = siteTextPortuguese.about;
        contact.innerHTML = siteTextPortuguese.contact;
        welcome_msg_1.innerHTML = siteTextPortuguese.welcome_msg_1;
        welcome_msg_2.innerHTML = siteTextPortuguese.welcome_msg_2;
        welcome_msg_3.innerHTML = siteTextPortuguese.welcome_msg_3;
        h1_right.innerHTML = siteTextPortuguese.h1_right;
        testimonials_section_heading.innerHTML = siteTextPortuguese.testimonials_section_heading;
        testimonial_1.innerHTML = siteTextPortuguese.testimonial_1;
        testimonial_2.innerHTML = siteTextPortuguese.testimonial_2;
        testimonial_3.innerHTML = siteTextPortuguese.testimonial_3;
        testimonial_4.innerHTML = siteTextPortuguese.testimonial_4;
        about_section_heading.innerHTML = siteTextPortuguese.about_section_heading;
        contact_section_heading.innerHTML = siteTextPortuguese.contact_section_heading; 
        about_ats.innerHTML = siteTextPortuguese.about_ats;
    } else {
        html.setAttribute('lang', 'en');
        language_button.style.cssText += "background-image: url(assets/images/braziltumbnail20x40.png);";
        home.innerHTML = siteTextEnglish.home;
        about.innerHTML = siteTextEnglish.about;
        contact.innerHTML = siteTextEnglish.contact;
        welcome_msg_1.innerHTML = siteTextEnglish.welcome_msg_1;
        welcome_msg_2.innerHTML = siteTextEnglish.welcome_msg_2;
        welcome_msg_3.innerHTML = siteTextEnglish.welcome_msg_3;
        h1_right.innerHTML = siteTextEnglish.h1_right;
        testimonials_section_heading.innerHTML = siteTextEnglish.testimonials_section_heading;
        testimonial_1.innerHTML = siteTextEnglish.testimonial_1;
        testimonial_2.innerHTML = siteTextEnglish.testimonial_2;
        testimonial_3.innerHTML = siteTextEnglish.testimonial_3;
        testimonial_4.innerHTML = siteTextEnglish.testimonial_4;
        about_section_heading.innerHTML = siteTextEnglish.about_section_heading;
        contact_section_heading.innerHTML = siteTextEnglish.contact_section_heading;
        about_ats.innerHTML = siteTextEnglish.about_ats;
    }
}
