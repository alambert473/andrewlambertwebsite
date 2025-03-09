import { headerTitles } from "./animationLightDarkData.js";
import { removeAnimation, addAnimation } from "./animationLightDarkData.js";
export let darkMode = true;

const headershadow = document.querySelector('.header-shadow');
const aboutsection = document.querySelector('.Aboutme');
const button = document.querySelector('.navbar-button');
const navbar = document.querySelector('nav');
const modeButton = document.querySelector('.lightdarkModeContainer');
const modeButtonMove = document.querySelector('.lightdarkmodeCircle');
const header = document.querySelector('header');
const title = document.querySelector('.titletfolio');
const homePageFirstLine = document.querySelector('.first-line');
const homePageSecondLine = document.querySelector('.second-line');
const homePageThirdLine = document.querySelector('.third-line ');
const homePageDesc = document.querySelector('.descritpion p');
const hiremeButton = document.querySelector('.hireme-button');
const aboutMeBackground = document.querySelector('.Aboutme');
const aboutMePicture = document.querySelector('.aboutme-picture');
const aboutMeTitle = document.querySelector('.aboutme-title');
const aboutMeDesc = document.querySelector('.aboutme-desc'); 
const skillsTitle = document.querySelector('.skills-title');
const frontandbackTitle = document.querySelectorAll('.skills-title-change');
const skillsline = document.querySelector('.skills-line');
const skillstext = document.querySelectorAll('.skill-row-title-section p');
const percentagetext = document.querySelectorAll('.percentage-text');
const percentageline = document.querySelectorAll('.percentageline');
const experiencepageBackground = document.querySelector('.experience');
const experienceline = document.querySelector('.experience-line');
const experiencetitle = document.querySelector('.experiencetitle');
const educationsectiontitle = document.querySelector('.education-title');
const experiencesectiontitle = document.querySelector('.experience-title');
const educationcontainer = document.querySelectorAll('.educationcontainer');
const blackdivanimation = document.querySelector('.black-div-animation');
const linedown = document.querySelectorAll('.red-line');
const linedowncircle = document.querySelectorAll('.linedowncircle');
const projectsline = document.querySelector('.projects-line');
const projectstitle = document.querySelector('.projects-title');
const projectsdesc = document.querySelector('.under-line-desc');
const projectscontainer = document.querySelectorAll('.projects-container');
const projectsectiontitle = document.querySelectorAll('.projects-desc-title');
const projectsdescinfo = document.querySelectorAll('.projects-desc-info');
const contactline = document.querySelector('.contact-line');
const contactmetitle = document.querySelector('.contactmetitle');
const form = document.querySelector('form');
const contactrectext = document.querySelector('.connectrectext');
const contactrecdesc = document.querySelector('.contactrecdesc');
const phonemargintext = document.querySelectorAll('.phone-margin');
const navbarlogo = document.querySelector('.navbarlogo');
const githublogo = document.querySelector('.github-logo');
const otherskillslinepercentage = document.querySelectorAll('.js-other-percentageline');
const ul = document.querySelector('ul');

modeButton.addEventListener('click', () => {
    if (darkMode === false) {
        frontandbackTitle.forEach((ele) => {
            ele.classList.add('colortoWhiteClass');
        });

        projectsdescinfo.forEach((ele) => {
            ele.classList.add('projects-desc-grey');
        });

        projectsectiontitle.forEach((ele) => {
            ele.classList.add('colortoWhiteClass');
        });

        //projectstitle.classList.add('colortoWhiteClass');
        skillsTitle.classList.add('colortoWhiteClass');
        experiencetitle.classList.remove('experience-titleanim');
        contactmetitle.classList.add('colortoWhiteClass');
        experiencetitle.classList.add('colortoWhiteClass');

        if (projectsdesc.classList.contains('textoBlackClass')) {
            projectsdesc.classList.remove('textoBlackClass');
        }
        projectsdesc.classList.add('under-line-desc-grey');
        

        removeAnimation(header, 'headertoWhiteAnimation', false);
        removeAnimation(ul, 'headertoWhiteAnimation', false);
        removeAnimation(modeButton, 'lightdarkModeContainertoLightanim', false);
        removeAnimation(modeButtonMove, 'lightdarkmodeCircletoLightanim', false);
        removeAnimation(title, 'TexttoBlackAnimation', false);
        removeAnimation(document.body, 'BackgroundToDefaultWhite', false);
        removeAnimation(homePageFirstLine, 'TexttoBlackAnimation', false);
        removeAnimation(homePageThirdLine, 'TexttoBlackAnimation', false);
        removeAnimation(homePageDesc, 'TexttoBlackAnimation', false);
        removeAnimation(aboutMeBackground, 'BackgroundToDefaultWhite', false);
        removeAnimation(experiencepageBackground, 'BackgroundToDefaultWhite', false);
        removeAnimation(aboutMeDesc, 'TexttoBlackAnimation', false);
        removeAnimation(githublogo, 'TexttoBlackAnimation', false)
        removeAnimation(aboutMeTitle, 'TexttoBlackAnimation', false);
        removeAnimation(skillsTitle, 'TexttoBlackAnimation', false);
        removeAnimation(educationsectiontitle, 'TexttoBlackAnimation', false);
        removeAnimation(navbarlogo, 'TexttoBlackAnimation', false);
        removeAnimation(experiencesectiontitle, 'TexttoBlackAnimation', false);
        removeAnimation(contactrectext, 'TexttoBlackAnimation', false);
        removeAnimation(experiencetitle, 'TexttoBlackAnimation', false);
        removeAnimation(projectstitle, 'TexttoBlackAnimation', false);
        removeAnimation(skillstext, 'TexttoBlackAnimation', true);
        removeAnimation(percentagetext, 'TexttoBlackAnimation', true);
        removeAnimation(projectsdescinfo, 'TexttoBlackAnimation', true);
        removeAnimation(projectsectiontitle, 'TexttoBlackAnimation', true);
        removeAnimation(projectsdesc, 'TexttoBlackAnimation');
        removeAnimation(contactmetitle, 'TexttoBlackAnimation');
        removeAnimation(contactrecdesc, 'contactrescdesclightgreyAnimation');
        removeAnimation(phonemargintext, 'contactrescdesclightgreyAnimation', true);


        headerTitles.forEach((ele) => {
            if (!ele.classList.contains('active')) {
                removeAnimation(ele, 'TexttoBlackAnimation');
                addAnimation(ele, 'TexttoWhiteAnimation')
            }
        });

        homePageSecondLine.style.textShadow = "none";
        hiremeButton.style.boxShadow = "none";
        headershadow.style.boxShadow = "none";
        aboutMePicture.style.boxShadow = "none";
        
        linedown.forEach((ele) => {
            ele.style.boxShadow = "none";
        });

        educationcontainer.forEach((ele) => {
            ele.style.boxShadow = "none";
        });

        linedowncircle.forEach((ele) => {
            ele.style.boxShadow = "none";
        });

        percentageline.forEach((line) => {
            line.style.boxShadow = "none";
        });

        otherskillslinepercentage.forEach((line) => {
            line.style.boxShadow = "none";
        });
 
        skillsline.style.backgroundImage = "linear-gradient(to right, rgb(11, 11, 11), var(--redcolor), rgb(11, 11, 11))";
        contactline.style.backgroundImage = "linear-gradient(to right, rgb(11, 11, 11), var(--redcolor), rgb(11, 11, 11))";
        experienceline.style.backgroundImage = "linear-gradient(to right, rgb(11, 11, 11), var(--redcolor), rgb(11, 11, 11))";
        projectsline.style.backgroundImage = "linear-gradient(to right, rgb(11, 11, 11), var(--redcolor), rgb(11, 11, 11))";
        blackdivanimation.style.backgroundColor = "rgb(16, 16, 16)";
        form.style.boxShadow = "none";

        projectscontainer.forEach((ele) => {
            ele.style.backgroundImage = "linear-gradient(to right, rgba(41, 41, 41, 0.7), rgba(65, 65, 65, .5))";
            ele.style.boxShadow = "none";
        });

        addAnimation(document.body, 'BackgroundToDefaultBlack', false);
        addAnimation(title, 'TexttoWhiteAnimation', false);
        addAnimation(header, 'headertoBlackAnimation', false);
        addAnimation(ul, 'headertoBlackAnimation', false);
        addAnimation(modeButton, 'lightdarkModeContainertoDarkanim', false);
        addAnimation(modeButtonMove, 'lightdarkmodeCircletoDarkanim', false);
        addAnimation(homePageFirstLine, 'TexttoWhiteAnimation', false);
        addAnimation(homePageThirdLine, 'TexttoWhiteAnimation', false);
        addAnimation(homePageDesc, 'TexttoWhiteAnimation', false);
        addAnimation(aboutMeBackground, 'BackgroundToLighterBlack', false);
        addAnimation(experiencepageBackground, 'BackgroundToLighterBlack', false);
        addAnimation(aboutMeTitle, 'TexttoWhiteAnimation', false);
        addAnimation(aboutMeDesc, 'TexttoWhiteAnimation', false);
        addAnimation(githublogo, 'TexttoWhiteAnimation', false)
        addAnimation(experiencesectiontitle, 'TexttoWhiteAnimation', false);
        addAnimation(educationsectiontitle, 'TexttoWhiteAnimation', false);
        addAnimation(skillsTitle, 'TexttoWhiteAnimation', false);
        addAnimation(experiencetitle, 'TexttoWhiteAnimation', false);
        addAnimation(contactrectext, 'TexttoWhiteAnimation', false);
        addAnimation(projectstitle, 'TexttoWhiteAnimation', false);
        addAnimation(navbarlogo, 'TexttoWhiteAnimation', false);
        addAnimation(skillstext, 'TexttoWhiteAnimation', true);
        addAnimation(percentagetext, 'TexttoWhiteAnimation', true);
        addAnimation(projectsdescinfo, 'projects-desc-grey-animation', true);
        addAnimation(projectsectiontitle, 'TexttoWhiteAnimation', true);
        addAnimation(projectsdesc, 'TextToGreyAnimation');
        addAnimation(contactmetitle, 'TexttoWhiteAnimation');
        addAnimation(contactrecdesc, 'contactrescdescblackgreyAnimation');
        addAnimation(phonemargintext, 'contactrescdescblackgreyAnimation', true);

        frontandbackTitle.forEach((ele) => {
            ele.classList.remove('js-leftfrontendtitleanim');
            ele.classList.remove('js-rightbackendtitleanim');
            ele.classList.remove('TexttoBlackAnimation');
            ele.classList.add('TexttoWhiteAnimation')
        })

        setTimeout(() => {
            darkMode = true;
        }, 600);

    } else {
        frontandbackTitle.forEach((ele) => {
            ele.classList.remove('colortoWhiteClass');
        });

        projectsdescinfo.forEach((ele) => {
            ele.classList.remove('projects-desc-grey');
        });

        projectsectiontitle.forEach((ele) => {
            ele.classList.remove('colortoWhiteClass');
        });

        projectstitle.classList.remove('colortoWhiteClass');
        if (projectsdesc.classList.contains('under-line-desc-grey')) {
            projectsdesc.classList.remove('under-line-desc-grey');
        }
        projectsdesc.classList.remove('colortoWhiteClass');
        contactmetitle.classList.remove('colortoWhiteClass');
        skillsTitle.classList.remove('colortoWhiteClass');
        experiencetitle.classList.remove('colortoWhiteClass');
        document.body.classList.remove('blackdefaultbackground');
        aboutsection.classList.remove('backgroundtolighterblack');
        skillsTitle.classList.remove('colorWhiteDefault');

        experiencetitle.classList.remove('experience-titleanim');
        experiencetitle.classList.remove('colorWhiteDefault');
        

        frontandbackTitle.forEach((ele) => {
            ele.classList.remove('colorWhiteDefault');
        })


        percentagetext.forEach((ele) => {
            ele.classList.remove('colorWhiteDefault');
        })
        

        removeAnimation(modeButton, 'lightdarkModeContainertoDarkanim');
        removeAnimation(modeButtonMove, 'lightdarkmodeCircletoDarkanim');
        removeAnimation(header, 'headertoBlackAnimation');
        removeAnimation(ul, 'headertoBlackAnimation');
        removeAnimation(title, 'TexttoWhiteAnimation');
        removeAnimation(document.body, 'BackgroundToDefaultBlack');
        removeAnimation(homePageFirstLine, 'TexttoWhiteAnimation');
        removeAnimation(homePageThirdLine, 'TexttoWhiteAnimation');
        removeAnimation(navbarlogo, 'TexttoWhiteAnimation');
        removeAnimation(homePageDesc, 'TexttoWhiteAnimation');
        removeAnimation(aboutMeBackground, 'BackgroundToLighterBlack');
        removeAnimation(experiencepageBackground, 'BackgroundToLighterBlack');
        removeAnimation(aboutMeDesc, 'TexttoWhiteAnimation');
        removeAnimation(githublogo, 'TexttoWhiteAnimation');
        removeAnimation(aboutMeTitle, 'TexttoWhiteAnimation');
        removeAnimation(experiencesectiontitle, 'TexttoWhiteAnimation');
        removeAnimation(educationsectiontitle, 'TexttoWhiteAnimation');
        removeAnimation(skillsTitle, 'TexttoWhiteAnimation');
        removeAnimation(contactrectext, 'TexttoWhiteAnimation');
        removeAnimation(contactmetitle, 'TexttoWhiteAnimation');
        removeAnimation(projectstitle, 'TexttoWhiteAnimation');
        removeAnimation(experiencetitle, 'TexttoWhiteAnimation');
        removeAnimation(skillstext, 'TexttoWhiteAnimation', true);
        removeAnimation(percentagetext, 'TexttoWhiteAnimation', true);
        removeAnimation(projectsdescinfo, 'projects-desc-grey-animation', true);
        removeAnimation(projectsectiontitle, 'TexttoWhiteAnimation', true);
        removeAnimation(projectsdesc, 'TextToGreyAnimation');
        removeAnimation(contactrecdesc, 'contactrescdescblackgreyAnimation');
        removeAnimation(phonemargintext, 'contactrescdescblackgreyAnimation', true);

        headerTitles.forEach((ele) => {
            if (!ele.classList.contains('active')) {
                removeAnimation(ele, 'TexttoWhiteAnimation');
                addAnimation(ele, 'TexttoBlackAnimation');
            }
        });

        homePageSecondLine.style.textShadow = "3px 3px 5px rgb(139, 139, 139)";
        hiremeButton.style.boxShadow = "3px 3px 5px rgb(157, 157, 157)";    
        aboutMePicture.style.boxShadow = "0px 0px 15px rgb(67, 67, 67)";
        headershadow.style.boxShadow = "0px 8px 10px rgba(85, 85, 85, 0.7)";
        skillsline.style.backgroundImage = "linear-gradient(to right, var(--titlecolor), var(--redcolor), var(--titlecolor))";
        contactline.style.backgroundImage = "linear-gradient(to right, var(--titlecolor), var(--redcolor), var(--titlecolor))";
        projectsline.style.backgroundImage = "linear-gradient(to right, var(--titlecolor), var(--redcolor), var(--titlecolor))";
        experienceline.style.backgroundImage = "linear-gradient(to right, var(--titlecolor), var(--redcolor), var(--titlecolor))";
        blackdivanimation.style.backgroundColor = "rgb(250, 250, 250)";

        projectscontainer.forEach((ele) => {
            ele.style.backgroundImage = "none";
        })


        linedown.forEach((ele) => {
            ele.style.boxShadow = "1px 1px 5px rgb(95, 95, 95, .5)";
        });

        linedowncircle.forEach((ele) => {
            ele.style.boxShadow = "1px 1px 5px rgba(61, 61, 61, .8)";
        });

        percentageline.forEach((line) => {
            line.style.boxShadow = "0px 0px 8px rgba(115, 115, 115, 0.7)";
        });

        otherskillslinepercentage.forEach((line) => {
            line.style.boxShadow = "0px 0px 8px rgba(115, 115, 115, 0.7)";
        });

        educationcontainer.forEach((ele) => {
            ele.style.boxShadow = "2px 4px 8px rgb(81, 81, 81, .3)";
        });

        projectscontainer.forEach((ele) => {
            ele.style.backgroundImage = "linear-gradient(150deg, rgb(255, 255, 255) 60%, rgb(214, 214, 214))";
            ele.style.boxShadow = "0px 0px 15px rgba(78, 78, 78, 0.7)";
        });

        form.style.boxShadow = "0px 0px 15px rgba(75, 75, 75, .4)";

        addAnimation(document.body, 'BackgroundToDefaultWhite');
        addAnimation(title, 'TexttoBlackAnimation');
        addAnimation(header, 'headertoWhiteAnimation');
        addAnimation(ul, 'headertoWhiteAnimation');
        addAnimation(modeButton, 'lightdarkModeContainertoLightanim');
        addAnimation(modeButtonMove, 'lightdarkmodeCircletoLightanim');
        addAnimation(homePageFirstLine, 'TexttoBlackAnimation');
        addAnimation(homePageThirdLine, 'TexttoBlackAnimation');
        addAnimation(navbarlogo, 'TexttoBlackAnimation');
        addAnimation(homePageDesc, 'TexttoBlackAnimation');
        addAnimation(educationsectiontitle, 'TexttoBlackAnimation');
        addAnimation(experiencesectiontitle, 'TexttoBlackAnimation');
        addAnimation(aboutMeBackground, 'BackgroundToDefaultWhite');
        addAnimation(experiencepageBackground, 'BackgroundToDefaultWhite');
        addAnimation(aboutMeDesc, 'TexttoBlackAnimation');
        addAnimation(githublogo, 'TexttoBlackAnimation')
        addAnimation(aboutMeTitle, 'TexttoBlackAnimation');
        addAnimation(skillsTitle, 'TexttoBlackAnimation');
        addAnimation(contactrectext, 'TexttoBlackAnimation');
        addAnimation(contactmetitle, 'TexttoBlackAnimation');
        addAnimation(projectstitle, 'TexttoBlackAnimation');
        addAnimation(experiencetitle, 'TexttoBlackAnimation');
        addAnimation(projectsdesc, 'TexttoBlackAnimation');
        addAnimation(contactrecdesc, 'contactrescdesclightgreyAnimation');
        addAnimation(phonemargintext, 'contactrescdesclightgreyAnimation', true);
        addAnimation(skillstext, 'TexttoBlackAnimation', true);
        addAnimation(projectsdescinfo, 'TexttoBlackAnimation', true);
        addAnimation(projectsectiontitle, 'TexttoBlackAnimation', true);
        addAnimation(percentagetext, 'TexttoBlackAnimation', true);

        frontandbackTitle.forEach((ele) => {
            ele.classList.remove('js-leftfrontendtitleanim');
            ele.classList.remove('TexttoWhiteAnimation');
            ele.classList.add('TexttoBlackAnimation');
        })

        setTimeout(() => {
            darkMode = false;
        }, 600);
    }
});

button.addEventListener('click', () => {
    if (navbar.classList.contains('navtobottom')) {
        navbar.classList.remove('navtobottom');
        navbar.classList.add('navtoUp');

        setTimeout(() => {
            navbar.classList.remove('navtoUp');
        }, 500);

    } else {
        navbar.classList.remove('navtobUp');
        navbar.classList.add('navtobottom');

        setTimeout(() => {
            navbar.classList.remove('navtoBottom');
        }, 500);
    }
});

