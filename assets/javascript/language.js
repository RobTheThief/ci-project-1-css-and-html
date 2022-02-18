/* SITE LANGUAGE */
let html = document.getElementById("html");
/* TEXT */
let home_burger = document.getElementById("home_burger");
let about_burger = document.getElementById("about_burger");
let contact_burger = document.getElementById("contact_burger");
let home_bar = document.getElementById("home_bar");
let about_bar = document.getElementById("about_bar");
let contact_bar = document.getElementById("contact_bar");
let welcome_msg_1 = document.getElementById("welcome_msg_1");
let welcome_msg_2 = document.getElementById("welcome_msg_2");
let welcome_msg_3 = document.getElementById("welcome_msg_3");
let testimonials_section_heading = document.getElementById("testimonials_section_heading");
let testimonial_1 = document.getElementById("testimonial_1");
let testimonial_2 = document.getElementById("testimonial_2");
let testimonial_3 = document.getElementById("testimonial_3");
let testimonial_4 = document.getElementById("testimonial_4");
let about_ats_1 = document.getElementById("about_ats_1")
let about_ats_2 = document.getElementById("about_ats_2")
let about_ats_3 = document.getElementById("about_ats_3")
let title = document.getElementById("title");
let message_label = document.querySelectorAll('[for="message_field"]'); 
let submit_button_text = document.querySelectorAll('[class="button_submit"]');
let language_button_tooltip_aria = document.querySelectorAll('[class="tooltip langtip"]');
let contact_section_heading = document.getElementById('contact_section_heading');
let contact_blurb = document.getElementById('contact_blurb');
/* ARIA LABELS */
let msg_container = document.getElementById("msg_container");
let landing_image_link_aria = document.getElementsByClassName("welcome_msg")
landing_image_link_aria = Object.values(landing_image_link_aria); //Convert values of the object to an array
let down_arrow = document.getElementById("down_arrow");
let logo_anchor = document.querySelectorAll('[aria-label="Go to home"]');
let home_anchor_aria_burger = document.querySelectorAll('[id="home_burger"]'); 
let about_anchor_aria_burger = document.querySelectorAll('[id="about_burger"]'); 
let contact_anchor_aria_burger = document.querySelectorAll('[id="contact_burger"]');
let home_anchor_aria_bar = document.querySelectorAll('[id="home_bar"]'); 
let about_anchor_aria_bar = document.querySelectorAll('[id="about_bar"]'); 
let contact_anchor_aria_bar = document.querySelectorAll('[id="contact_bar"]'); 
let language_button_burger_aria = document.querySelectorAll('[id="language_button_burger"]'); 
let language_button_nav_aria = document.querySelectorAll('[id="language_button_bar"]'); 
let youtube_anchor_aria = document.querySelectorAll('[href="https://www.youtube.com/channel/UCjLcF0ca0OfAnRfxxyO7Zyw"]');
let tooltip_aria = document.querySelectorAll('[class="tooltip"]');
let twitter_anchor_aria = document.querySelectorAll('[href="https://twitter.com/"]');
let linkedin_anchor_aria = document.querySelectorAll('[href="https://www.linkedin.com/"]');
/* IMAGE ALTS */
let therapy_woman_alt = document.querySelectorAll('[alt="Woman getting therapy online"]');
let half_banner_alt = document.querySelectorAll('[srcset="assets/images/bannerleft.png"]');
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
    testimonials_section_heading: 'TESTIMONIALS',
    testimonial_1: 'The audio quality is so professional and clear.',
    testimonial_2: 'Thank you for your effort in translating this content.',
    testimonial_3: "It's great to have access to this life changing content",
    testimonial_4: 'Her voice is very pleasant to listen to',
    about_section_heading: 'ABOUT',
    contact_section_heading: 'CONTACT',
    title: 'An Tobair Segais - Interpreting Mentors',
    about_ats_1: 'An Tobar Segais Interpreting Mentors project started from the desire and ambition to bring educational mental health content to Portuguese speakers and share with English speakers a compilation of the most qualified mentors out there.',
    about_ats_2: 'The main areas covered here are related to self-improvement based on psychology, neuroscience, stoicism, western and eastern philosophy.',
    about_ats_3: 'Thank you for checking in. And, Keep improving.',
    contact_blurb: 'If you have any questions about my work, or if you need any interpreting or translation please send me a message.',
}

/* PORTUGUESE SITE VERSION */
const siteTextPortuguese = {
    home: 'Início',
    about: 'Sobre',
    contact: 'Contato',
    welcome_msg_1: 'Bem-vindo ao An Tobair Segais!',
    welcome_msg_2: 'Conectando pessoas e..',
    welcome_msg_3: 'ajudando mentes à crescer',
    testimonials_section_heading: 'TESTEMUNHOS',
    testimonial_1: 'A qualidade do áudio é tão professional e clara.',
    testimonial_2: 'Obrigada pelo seu esforço em traduzir este conteúdo.',
    testimonial_3: 'É ótimo ter acesso à este tipo de conteúdo tão relevante.',
    testimonial_4: 'A voz dela é muito agradável de escutar.',
    about_section_heading: 'SOBRE',
    contact_section_heading: 'CONTATO',
    title: 'An Tobair Segais - Interpretando Mentores',
    about_ats_1: 'An Tobar Segais - Interpretando Mentores, nasceu do desejo e ambição de levar conteúdo educacional sobre saúde mental para falantes da língua portuguesa e compartilhar com falantes da língua inglesa uma compilação dos mais qualificados mentores disponíveis no Youtube.', 
    about_ats_2: 'As principais áreas abordadas aqui são relacionadas com aperfeiçoamento pessoal e auto-conhecimento, com base na psicologia, neurociência, estoicismo, filosofia ocidental e oriental.',
    about_ats_3: 'Obrigada por aparecer por aqui. Continue se aperfeiçoando',
    contact_blurb: 'Se voce tiver alguma pergunta sobre meu trabalho, ou se voce precisar de servicos de interprecao e traducao, por favor enviei me uma mensagem.',
}

/* TOGGLE SITE LANGUAGE */
const setLanguage = () => {
    if (html.getAttribute('lang') == "en"){
        html.setAttribute('lang', 'pt');
        if (language_button_burger_aria[0] !== undefined)
            language_button_burger_aria[0].style.cssText += 'background-image: url(assets/images/unionjackflag20x40.png);';
        if (language_button_nav_aria[0] !== undefined)
            language_button_nav_aria[0].style.cssText += 'background-image: url(assets/images/unionjackflag20x40.png);';
        home_burger.innerHTML = siteTextPortuguese.home;
        about_burger.innerHTML = siteTextPortuguese.about;
        contact_burger.innerHTML = siteTextPortuguese.contact;
        home_bar.innerHTML = siteTextPortuguese.home;
        about_bar.innerHTML = siteTextPortuguese.about;
        contact_bar.innerHTML = siteTextPortuguese.contact;
        welcome_msg_1.innerHTML = siteTextPortuguese.welcome_msg_1;
        welcome_msg_2.innerHTML = siteTextPortuguese.welcome_msg_2;
        welcome_msg_3.innerHTML = siteTextPortuguese.welcome_msg_3;
        testimonials_section_heading.innerHTML = siteTextPortuguese.testimonials_section_heading;
        testimonial_1.innerHTML = siteTextPortuguese.testimonial_1;
        testimonial_2.innerHTML = siteTextPortuguese.testimonial_2;
        testimonial_3.innerHTML = siteTextPortuguese.testimonial_3;
        testimonial_4.innerHTML = siteTextPortuguese.testimonial_4;
        about_section_heading.innerHTML = siteTextPortuguese.about_section_heading;
        contact_section_heading.innerHTML = siteTextPortuguese.contact_section_heading;
        contact_blurb.innerHTML = siteTextPortuguese.contact_blurb;
        about_ats_1.innerHTML = siteTextPortuguese.about_ats_1;
        about_ats_2.innerHTML = siteTextPortuguese.about_ats_2;
        about_ats_3.innerHTML = siteTextPortuguese.about_ats_3;
        title.innerHTML = siteTextPortuguese.title; 
        msg_container.setAttribute('aria-label', "Imagem principal de uma mulher olhando pra cima com estrelas na cabeça. Contem texto com animação que surge e desaparece e há uma seta apontada pra baixo.");
        landing_image_link_aria.forEach((ele) => ele.setAttribute('aria-label', 'Vai para o conteúdo principal da página'));
        down_arrow.setAttribute('aria-label', 'Vai para o conteúdo principal da página');
        logo_anchor[0].setAttribute('aria-label', 'Vai pra página principal');
        home_anchor_aria_burger[0].setAttribute('aria-label', 'Vai pra página principal');
        about_anchor_aria_burger[0].setAttribute('aria-label', 'Vai pra a aba Sobre da página');
        contact_anchor_aria_burger[0].setAttribute('aria-label', 'Vai pra a aba contato da página'); 
        home_anchor_aria_bar[0].setAttribute('aria-label', 'Vai pra página principal');
        about_anchor_aria_bar[0].setAttribute('aria-label', 'Vai pra a aba Sobre da página');
        contact_anchor_aria_bar[0].setAttribute('aria-label', 'Vai pra a aba contato da página'); 
        language_button_nav_aria[0] && language_button_nav_aria[0].setAttribute('aria-label', 'Botão pra mudar o idioma entre português e inglês');
        language_button_burger_aria[0] && language_button_burger_aria[0].setAttribute('aria-label', 'Botão pra mudar o idioma entre português e inglês');
        language_button_tooltip_aria[0].innerHTML = 'Idioma';
        therapy_woman_alt[0].setAttribute('alt', 'Mulher fazendo terapia online'); 
        half_banner_alt[0].setAttribute('alt', 'Imagem em linha reta de quatro balões de diálogo com uma cabeça de mulher dentro de cada um deles');
        email_placeholder[0].setAttribute('placeholder', 'exemplo@seuemail.com');
        message_label[0].innerHTML = 'Mensagem'; 
        message_placeholder[0].setAttribute('placeholder', 'Por favor digite sua mensagem aqui'); 
        submit_button_text[0].setAttribute('value', 'Enviar');
        youtube_anchor_aria[0].setAttribute('aria-label', 'Vai para o canal do Youtube (abre uma nova janela)'); 
        tooltip_aria.forEach((ele) => ele.setAttribute('aria-label', 'Balão de descriçao do ícone')); 
        twitter_anchor_aria[0].setAttribute('aria-label', 'Vai para a página do twitter (abre uma nova janela)');
        linkedin_anchor_aria[0].setAttribute('aria-label', 'Vai para a página do linkedin (abre uma nova janela)');
    } else {
        html.setAttribute('lang', 'en');
        if (language_button_burger_aria[0])
            language_button_burger_aria[0].style.cssText += 'background-image: url(assets/images/braziltumbnail20x40.png);';
        if (language_button_nav_aria[0])
            language_button_nav_aria[0].style.cssText += 'background-image: url(assets/images/braziltumbnail20x40.png);';
        home_burger.innerHTML = siteTextEnglish.home;
        about_burger.innerHTML = siteTextEnglish.about;
        contact_burger.innerHTML = siteTextEnglish.contact;
        home_bar.innerHTML = siteTextEnglish.home;
        about_bar.innerHTML = siteTextEnglish.about;
        welcome_msg_1.innerHTML = siteTextEnglish.welcome_msg_1;
        welcome_msg_2.innerHTML = siteTextEnglish.welcome_msg_2;
        welcome_msg_3.innerHTML = siteTextEnglish.welcome_msg_3;
        testimonials_section_heading.innerHTML = siteTextEnglish.testimonials_section_heading;
        testimonial_1.innerHTML = siteTextEnglish.testimonial_1;
        testimonial_2.innerHTML = siteTextEnglish.testimonial_2;
        testimonial_3.innerHTML = siteTextEnglish.testimonial_3;
        testimonial_4.innerHTML = siteTextEnglish.testimonial_4;
        about_section_heading.innerHTML = siteTextEnglish.about_section_heading;
        contact_section_heading.innerHTML = siteTextEnglish.contact_section_heading; 
        contact_blurb.innerHTML = siteTextEnglish.contact_blurb;
        about_ats_1.innerHTML = siteTextEnglish.about_ats_1;
        about_ats_2.innerHTML = siteTextEnglish.about_ats_2;
        about_ats_3.innerHTML = siteTextEnglish.about_ats_3;
        title.innerHTML = siteTextEnglish.title;
        msg_container.setAttribute('aria-label', "Hallucinatory landing image of woman looking up with starts in her head. Contains animated text and a scroll down arrow");
        landing_image_link_aria.forEach((ele) => ele.setAttribute('aria-label', 'Go to main content of web page'));
        down_arrow.setAttribute('alt', 'Go to main content of web page'),
        logo_anchor[0].setAttribute('aria-label', 'Go to home');
        home_anchor_aria_burger[0].setAttribute('aria-label', 'Go to home');
        about_anchor_aria_burger[0].setAttribute('aria-label', 'Go to about section of this page');
        contact_anchor_aria_burger[0].setAttribute('aria-label', 'Go to contact section of this page'); 
        home_anchor_aria_bar[0].setAttribute('aria-label', 'Go to home');
        about_anchor_aria_bar[0].setAttribute('aria-label', 'Go to about section of this page');
        contact_anchor_aria_bar[0].setAttribute('aria-label', 'Go to contact section of this page');
        language_button_nav_aria[0] && language_button_nav_aria[0].setAttribute('aria-label', 'Button to switch language between Portuguese and English');
        language_button_burger_aria[0] && language_button_burger_aria[0].setAttribute('aria-label', 'Button to switch language between Portuguese and English');
        language_button_tooltip_aria[0].innerHTML = 'Language';
        therapy_woman_alt[0].setAttribute('alt', 'Woman getting therapy online');
        half_banner_alt[0].setAttribute('alt', 'Half of a banner image of heads with speech bubbles.');
        email_placeholder[0].setAttribute('placeholder', 'example@yourmail.com');
        message_label[0].innerHTML = 'Message';
        message_placeholder[0].setAttribute('placeholder', 'Please type your message here');
        submit_button_text[0].setAttribute('value', 'Submit');
        youtube_anchor_aria[0].setAttribute('aria-label', 'Go to our youtube channel (opens in new tab)');
        tooltip_aria.forEach((ele) => ele.setAttribute('aria-label', 'Icon tooltip'));
        twitter_anchor_aria[0].setAttribute('aria-label', 'Go to our twitter page (opens in new tab)');
        linkedin_anchor_aria[0].setAttribute('aria-label', 'Go to our linkedin page (opens in new tab)');
    }
}
