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
let message_label = document.querySelectorAll('[for="message_field"]'); 
let submit_button_text = document.querySelectorAll('[class="button_submit"]');
let language_button_tooltip_aria = document.querySelectorAll('[class="tooltip langtip"]'); 
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
let icon_attributes_aria = document.querySelectorAll('[class="icon_attributes"]'); 
let shutterstock_attribute_aria = document.querySelectorAll('[href="https://wwww.shutterstock.com"]');
let youtube_anchor_aria = document.querySelectorAll('[href="https://www.youtube.com/channel/UCjLcF0ca0OfAnRfxxyO7Zyw"]');
let tooltip_aria = document.querySelectorAll('[class="tooltip"]');
let twitter_anchor_aria = document.querySelectorAll('[href="https://twitter.com/"]');
let linkedin_anchor_aria = document.querySelectorAll('[href="https://www.linkedin.com/"]');
/* IMAGE ALTS */
let chevron_alt = document.getElementById('chevron_icon'); 
let accessibility_icon_alt = document.querySelectorAll('[alt="accessibility icon"]'); 
let therapy_woman_alt = document.querySelectorAll('[alt="Woman getting therapy online"]');
let half_banner_alt = document.querySelectorAll('[srcset="assets/images/bannerleft.png"]');
let youtube_icon_alt = document.querySelectorAll('[src="https://img.icons8.com/nolan/64/youtube-squared.png"]'); 
let twitter_icon_alt = document.querySelectorAll('[src="https://img.icons8.com/nolan/64/twitter.png"]');
let linkedin_icon_alt = document.querySelectorAll('[src="https://img.icons8.com/nolan/64/linkedin.png"]');
/* PLACEHOLDERS */ 
let email_placeholder = document.querySelectorAll('[id="email_field"]'); 
let message_placeholder = document.querySelectorAll('[id="message_field"]');

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
    testimonial_1: 'The audio quality is so professional and clear.',
    testimonial_2: 'Thank you for your effort in translating this content.',
    testimonial_3: "It's great to have access to this life changing content",
    testimonial_4: 'Her voice is very pleasant to listen to',
    about_section_heading: 'ABOUT',
    about_ats: 'An Tobar Segais Interpreting Mentors project started from the desire and ambition to bring educational mental health content to Portuguese speakers and share with English speakers a compilation of the most qualified mentors out there.<br>The main areas covered here are related to self-improvement based on psychology, neuroscience, stoicism, western and eastern philosophy.<br>Thank you for checking in. And, Keep improving',
    contact_form_legend: '<h2 id="contact_section_heading">Contact</h2>',
    title: 'An Tobair Segais - Interpreting Mentors',
}

/* PORTUGUESE SITE VERSION */
const siteTextPortuguese = {
    home: 'Início',
    about: 'Sobre',
    contact: 'Contato',
    welcome_msg_1: 'Bem-vindo ao An Tobair Segais!',
    welcome_msg_2: 'Conectando pessoas e..',
    welcome_msg_3: 'ajudando mentes à crescer',
    h1_right: 'AN TOBAIR SEGAIS - INTERPRETANDO MENTORES',
    testimonials_section_heading: 'TESTEMUNHOS',
    testimonial_1: 'A qualidade do áudio é tão professional e clara.',
    testimonial_2: 'Obrigada pelo seu esforço em traduzir este conteúdo.',
    testimonial_3: 'É ótimo ter acesso à este tipo de conteúdo tão relevante.',
    testimonial_4: 'A voz dela é muito agradável de escutar.',
    about_section_heading: 'SOBRE',
    about_ats: 'An Tobar Segais - Interpretando Mentores, nasceu do desejo e ambição de levar conteúdo educacional sobre saúde mental para falantes da língua portuguesa e compartilhar com falantes da língua inglesa uma compilação dos mais qualificados mentores disponíveis no Youtube.<br>As principais áreas abordadas aqui são relacionadas com aperfeiçoamento pessoal e auto-conhecimento, com base na psicologia, neurociência, estoicismo, filosofia ocidental e oriental.<br>Obrigada por aparecer por aqui. Continue se aperfeiçoando',
    contact_form_legend: '<h2 id="contact_section_heading">Contato</h2>',
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
        language_button_tooltip_aria[0].innerHTML = 'Idioma';
        therapy_woman_alt[0].setAttribute('alt', 'Mulher fazendo terapia online'); 
        half_banner_alt[0].setAttribute('alt', 'Imagem em linha reta de quatro balões de diálogo com uma cabeça de mulher dentro de cada um deles');
        email_placeholder[0].setAttribute('placeholder', 'exemplo@seuemail.com');
        message_label[0].innerHTML = 'Mensagem'; 
        message_placeholder[0].setAttribute('placeholder', 'Por favor digite sua mensagem aqui'); 
        submit_button_text[0].setAttribute('value', 'Enviar');
        icon_attributes_aria.forEach((ele) => ele.setAttribute('aria-label', 'Vai para o website do icon8 (abre uma nova janela)'));
        shutterstock_attribute_aria[0].setAttribute('aria-label', 'Vai para o website do shutterstock (abre uma nova janela)'); 
        youtube_anchor_aria[0].setAttribute('aria-label', 'Vai para o canal do Youtube (abre uma nova janela)'); 
        youtube_icon_alt[0].setAttribute('alt', 'ícone youtube'); 
        tooltip_aria.forEach((ele) => ele.setAttribute('aria-label', 'Balão de descriçao do ícone')); 
        twitter_anchor_aria[0].setAttribute('aria-label', 'Vai para a página do twitter (abre uma nova janela)');
        twitter_icon_alt[0].setAttribute('alt', 'ícone twitter');
        linkedin_anchor_aria[0].setAttribute('aria-label', 'Vai para a página do linkedin (abre uma nova janela)');
        linkedin_icon_alt[0].setAttribute('aria-label', 'ícone linkedin');
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
        language_button_tooltip_aria[0].innerHTML = 'Language';
        therapy_woman_alt[0].setAttribute('alt', 'Woman getting therapy online');
        half_banner_alt[0].setAttribute('alt', 'Half of a banner image of heads with speech bubbles.');
        email_placeholder[0].setAttribute('placeholder', 'example@yourmail.com');
        message_label[0].innerHTML = 'Message';
        message_placeholder[0].setAttribute('placeholder', 'Please type your message here');
        submit_button_text[0].setAttribute('value', 'Submit');
        icon_attributes_aria.forEach((ele) => ele.setAttribute('aria-label', 'Go to the icon8 page (opens in new tab)'));
        shutterstock_attribute_aria[0].setAttribute('aria-label', 'Go to the shutterstock page (opens in new tab)');
        youtube_anchor_aria[0].setAttribute('aria-label', 'Go to our youtube channel (opens in new tab)');
        youtube_icon_alt[0].setAttribute('alt', 'youtube icon');  
        tooltip_aria.forEach((ele) => ele.setAttribute('aria-label', 'Icon tooltip'));
        twitter_anchor_aria[0].setAttribute('aria-label', 'Go to our twitter page (opens in new tab)');
        twitter_icon_alt[0].setAttribute('alt', 'twitter icon');
        linkedin_anchor_aria[0].setAttribute('aria-label', 'Go to our linkedin page (opens in new tab)');
        linkedin_icon_alt[0].setAttribute('aria-label', 'linkedin icon');
    }
}
