# AN TOBAIR SEGAIS - INTERPRETING MENTORS

An Tobair Segair - Interpreting Mentors is a portfolio site for an interpreter and youtuber who dubs over popular self help youtube videos and reuploads to her chanel to give access to Portuguese speakers.  The primary goal of the site is as a portfolio site for an interpreter that links to her youtube channel and other social media, and allows potential employers to make contact.

![Responsive Mockup](https://github.com/RobTheThief/ci-project-1-css-and-html/blob/main/media/readmedevices.png)

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the interpreter.
        2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
        3. As a First Time Visitor, I want to look for testimonials to understand what their users think of them and see if they are trusted. I also want to locate their youtube channel and social media links to see their followings and content to gauge their competence.

    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to find links to social media and youtube channel.
        2. As a Returning Visitor, I want to find contact information.

-   ### Design
    -   #### Colour Scheme
        -   The two main colours used are blue, white, and violet.
    -   #### Typography
        -   The Raleway font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly.
    -   #### Imagery
        -   Imagery is important. The large, landing image is designed to be striking, thought provoking and catch the user's attention.
 
## FEATURES

### EXISTING FEATURES

- __Landing Image__

    - A fully resposive landing image with overlayed animated welcome message and chevron prompting the user to scroll down.

    - Each text element and chevron are enclosed in anchors that will bring the user to the main contant of the page. 

    - The landing image greets the use with an awe inspiring image to grab attention and peak interest.

![Landing Image](https://github.com/RobTheThief/ci-project-1-css-and-html/blob/main/media/landingimagescreenshot.png)

- __Navigation Bar__

    - Being a one page website, this fully responsive navigation bar contains links to Home, the About and Contact sections of the page, logo link, and a language accessibility button.
    
    - The nav bar is positioned under the landing image and is sticky, so once the user has used the link on the landing image to scroll down it will remain at the top of the page as they naviagte the sections.

    - This section allows the user to easily navigate the page on all devices without any excessive scrolling.    

![Nav Bar](https://github.com/RobTheThief/ci-project-1-css-and-html/blob/main/media/navbarscreenshot.png)

- __Language Accessibility Button__

    - This is button on the nav bar allows the user to toggle between Portuguese and English versions of the site.
    
    - Text, aria labels, alts and html tag lang attribute are changed to assists screen readers in Portuguese or English.

    - Being an interpreters site users may only speak one of these languages and so the option to switch is needed.

![Language Button](https://github.com/RobTheThief/ci-project-1-css-and-html/blob/main/media/langbuttonscreenshot.png)      

- __Testimonials__

    - The testimonials section of the site allows the user to see what subscribers have said about the youtube channel.

    - This allows a potential employer to gauge the youtubes abilities in interpreting the self help lessons.

![Testimonials](https://github.com/RobTheThief/ci-project-1-css-and-html/blob/main/media/testimonialsscreenshot.png)

- __About__

    - This section gives a better explaination of what the channel is about and what its goals are.

    - This gives a new user a better idea of the type of content being interpreted.

![Testimonials](https://github.com/RobTheThief/ci-project-1-css-and-html/blob/main/media/aboutscreenshot.png)

- __Contact__

    - This section allows the user to contact the interpreter. The user will be asked to submit their email address and a message.

![Contact](https://github.com/RobTheThief/ci-project-1-css-and-html/blob/main/media/contactscreenshot.png)

- __Footer__

    - This section includes links to the Youtube channel, Twitter, and linkedIn. The links open to a new tab, have tooltips, and hover transitions.
    
    - The footer is valuable to the user as it provides a link to the channel, and Twitter account for updates, and LinkedIn for potential employers.


![Footer](https://github.com/RobTheThief/ci-project-1-css-and-html/blob/main/media/footerscreenshot.png)

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
### Frameworks, Libraries & Programs Used

1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Raleway' font into the style.css file which is used in all text on the site.
1. [Icons8:](https://icons8.com/)
    - Font Awesome was used to add social media icons and the down chevron on the landing image.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [GIMP:](https://www.gimp.org/)
    - GIMP was used for resizing images and editing photos for the website.
1. [Formspree:](https://formspree.io/)
    - Formspree was used to handle the backend for the POST action from the contact section and send an email with the data from the form to an email address. 

## TESTING

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals
        1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the interpreter.
            1. On accessing the site the user is welcomed with a landing image and welcome message including the website name, and prompted to scoll down or click on the chevron.
            2. The user is the brought to the main content of the site with the navigation bar contains the site name and description "An Tobair Segais - Interpreting mentors".
            3. At this point the user can also see the testimonials which adds to their understanding of what the site is about.
            4. As the navigation bar is now visible the user can also see a link to the About section or if they are to scroll down it is the next section after Testimonials
        2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
            1. Being a one page website, this fully responsive navigation bar contains links to Home, the About and Contact sections of the page, logo link, and a language accessibility button.
            2. The navigation bar is positioned under the landing image and is sticky so it is always at the top of the page once the user scrolls past the landing image.
        3. As a First Time Visitor, I want to look for testimonials to understand what their users think of them and see if they are trusted. I also want to locate their youtube channel and social media links to see their followings and content to gauge their competence.
            1. On accessing the site and after clicking on the welcome message, down chevrol, or just scrolling down, the first section shows testimonials from youtube users who consume the content and are native Portuguese speakers.
            2. In the footer section, under the contact section are links to the Youtube channel, Twitter, and LinkedIn which all open in a new tab. 

-   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to find links to social media and youtube channel.
            1.In the footer section, under the contact section are links to the Youtube channel, Twitter, and LinkedIn which all open in a new tab.
        2. As a Returning Visitor, I want to find contact information.
            1. The navigation bar has link for contact section. 2. This brings the user to the contact form where they can fill out the fields and message the interpreter directly.
            3. On clicking submit they will fill out a captcha and then be given the option to return to the site.  

### Further Testing

-   The Website was tested on Google Chrome, Firefox, Microsoft Edge, Brave Browser, Ecosia and Safari.
-   The website was viewed on a variety of devices such as Desktop, Laptop, Samsung S9, S10.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Known Bugs

    -   On mobile devices in landscape mode the tip of the chevron may temporarily move outside the screen. This doesnt impact the usability or look of the feature.
    -   On some devices the top of the womans head on the landing image may overflow out of view but doesnt impast the aesthetics of the image.
    -   On larger TVs the backgroud of the about scetion may move up under part of the testimonials.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official W3C validator.
- CSS
  - No errors were found when passing through the official(Jigsaw) validator.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the main branch.
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://robthethief.github.io/ci-project-1-css-and-html/

## Credits  

### Content 

- The text for the Home page was taken from the An Tobair Segais youtube channel [YouTube Channel](https://www.youtube.com/channel/UCjLcF0ca0OfAnRfxxyO7Zyw) and from the youtuber herself - Daniela Nascimento Gannon.
- Translations were done by Daniela Nascimento Gannon.
- The icons in the footer and the down chevron over the landing image were taken from [Icons8](https://icons8.com/)

### Media

- The photos used on the home page and the page logo are from [Shutterstock](https://www.shutterstock.com/)
