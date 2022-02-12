/* SITE LANGUAGE */
let html = document.getElementById("html");

/* TEXT */
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
let contact_form_legend = document.getElementById("contact_form_legend");
let title = document.getElementById("title");

/* ARIA LABELS */
let msg_container = document.getElementById("msg_container");
let landing_image_link_aria = document.getElementsByClassName("welcome_msg")
landing_image_link_aria = Object.values(landing_image_link_aria); //Convert values of the object to an array
let down_arrow = document.getElementById("down_arrow");
let logo_anchor = document.querySelectorAll('[aria-label="Go to home"]');
let nav_home_anchor_aria = document.querySelectorAll('[id="home"]'); 
let nav_about_anchor_aria = document.querySelectorAll('[id="about"]'); 
let nav_contact_anchor_aria = document.querySelectorAll('[id="contact"]'); 
let language_button_aria = document.querySelectorAll('[id="language_button"]'); 
let language_button_tooltip_aria = document.querySelectorAll('[class="tooltip langtip"]');
/* IMAGE ALTS */
let chevron_alt = document.getElementById('chevron_icon'); 
let accessibility_icon_alt = document.querySelectorAll('[alt="accessibility icon"]');
/* BUTTON */
/* let language_button = document.getElementById("language_button"); */

/* ENGLISH SITE VERSION */
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
    contact_form_legend: 'Contact',
    title: 'An Tobair Segais - Interpreting Mentors',

}

/* PORTUGUESE SITE VERSION */
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
    contact_form_legend: 'Contato',
    title: 'An Tobair Segais - Interpretando Mentores',
    

}


/* TOGGLE SITE LANGUAGE */
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
        contact_form_legend.innerHTML = siteTextPortuguese.contact_form_legend; 
        about_ats.innerHTML = siteTextPortuguese.about_ats;
        title.innerHTML = siteTextPortuguese.title; 
        msg_container.setAttribute('aria-label', "Imagem principal de uma mulher olhando pra cima com estrelas na cabeça. Contem texto com animação que surge e desaparece e há uma seta apontada pra baixo.");
        landing_image_link_aria.forEach((ele) => ele.setAttribute('aria-label', 'Vai para o conteúdo principal da página'));
        down_arrow.setAttribute('aria-label', 'Vai para o conteúdo principal da página');
        chevron_alt.setAttribute('alt', 'Seta pra baixo indicando pra rolar a página.'); 
        logo_anchor[0].setAttribute('aria-label', 'Vai pra página principal');
        nav_home_anchor_aria[0].setAttribute('aria-label', 'Vai pra página principal'); nav_about_anchor_aria
        nav_about_anchor_aria[0].setAttribute('aria-label', 'Vai pra a aba Sobre da página');
        nav_contact_anchor_aria[0].setAttribute('aria-label', 'Vai pra a aba contato da página'); 
        accessibility_icon_alt[0].setAttribute('alt', 'ícone de acessibilidade'); 
        language_button_aria[0].setAttribute('aria-label', 'Botão pra mudar o idioma entre português e inglês'); 
        language_button_tooltip_aria[0].setAttribute('aria-label', 'Idioma');
        language_button_tooltip_aria[0].innerHTML = 'Idioma';
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
        contact_form_legend.innerHTML = siteTextEnglish.contact_form_legend;
        about_ats.innerHTML = siteTextEnglish.about_ats;
        title.innerHTML = siteTextEnglish.title;
        msg_container.setAttribute('aria-label', "Hallucinatory landing image of woman looking up with starts in her head. Contains animated text and a scroll down arrow");
        landing_image_link_aria.forEach((ele) => ele.setAttribute('aria-label', 'Go to main content of web page'));
        down_arrow.setAttribute('alt', 'Go to main content of web page'),
        chevron_alt.setAttribute('alt', 'down arrow ,prompting to scroll down');
        logo_anchor[0].setAttribute('aria-label', 'Go to home');
        nav_home_anchor_aria[0].setAttribute('aria-label', 'Go to home');
        nav_about_anchor_aria[0].setAttribute('aria-label', 'Go to about section of this page'); id="contact"
        nav_contact_anchor_aria[0].setAttribute('aria-label', 'Go to contact section of this page');
        accessibility_icon_alt[0].setAttribute('alt', 'accessibility icon');
        language_button_aria[0].setAttribute('aria-label', 'Button to switch language between Portuguese and English');
        language_button_tooltip_aria[0].setAttribute('aria-label', 'Language');
        language_button_tooltip_aria[0].innerHTML = 'Language';
    }
}
