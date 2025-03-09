import { headerTitles } from "./animationLightDarkData.js";
import aboutDesc from "./aboutdesc.js";

export let darkMode = true;

const ToggleButton = document.querySelector('.lightdarkModeContainer');
const ToggleButtonCircle = document.querySelector('.lightdarkmodeCircle');
const ulcontainer = document.querySelector('.js-ulcontainer');
const header = document.querySelector('header');
const body = document.querySelector('body');
const leftheadersection = document.querySelector('.js-titlecontainer');
const menuIcon = document.querySelector('.js-menucontainer');
const leftHome = document.querySelector('.js-textsectioncontainer');
const aboutmesection = document.querySelector('.Aboutme');
const aboutpicture = document.querySelector('.js-imagecontainer');
const aboutright = document.querySelector('.js-rightaboutcontainer')
const skillstitle = document.querySelector('.skills-title');
const skillsline = document.querySelector('.skills-line');
const frontendbackendtitles = document.querySelectorAll('.frontendandbackendtitle');
const skillstext = document.querySelectorAll('.skill-row-title-section p');
const percentagetext = document.querySelectorAll('.percentage-text');
const percentageline = document.querySelectorAll('.percentageline');
const otherskillslinepercentage = document.querySelectorAll('.js-other-percentageline');
const githublogo = document.querySelector('.github-logo ');
const othertitle = document.querySelector('.js-other-title');
const experiencepage = document.querySelector('.experience');
const experiencetitle = document.querySelector('.experiencetitle');
const experienceline = document.querySelector('.experience-line');
const educationtitle = document.querySelector('.education-title');
const experiencetitlemain = document.querySelector('.experience-title');
const projectstitle = document.querySelector('.projects-title');
const projectsline = document.querySelector('.projects-line');
const underdescproj = document.querySelector('.under-line-desc');
const allcontainersproj = document.querySelectorAll('.projects-container');
const projdesctitle = document.querySelectorAll('.projects-desc-title');
const projectcontainerinfo = document.querySelectorAll('.projects-desc-info');
const contactmetitle = document.querySelector('.contactmetitle');
const contactmeline = document.querySelector('.contact-line');
const connectrectext = document.querySelector('.connectrectext');
const contactrecdesc = document.querySelector('.contactrecdesc')
const contacticontext = document.querySelectorAll('.phone-margin');
const ulbackground = document.querySelector('.js-ulcontainer');
const blackdivanimation = document.querySelector('.black-div-animation');

function checksingleElement(element, name) {
    if (element.classList.contains(name)) {
        element.classList.remove(name)
    } else {
        element.classList.add(name);
    }
}

function checkMutipleElements(element, name) {
    element.forEach((ele) => {
        if (ele.classList.contains(name)) {
            ele.classList.remove(name);
        } else {
            ele.classList.add(name);
        }
    })
}

function renderWebsiteMode() {
    /* -------------- model -------------- */
    const modeType = darkMode === false ? ['headertoWhiteAnimation', 'addheader-shadow'] : ['headertoBlackAnimation'];
    const defaultmodeType = darkMode === false ? 'BackgroundToDefaultWhite' : 'BackgroundToDefaultBlack';
    const lightermodeType = darkMode === false ? 'BackgroundToDefaultWhite' : 'BackgroundToLighterBlack';
    const TextShadowType = darkMode === false ? 'leftTextShadow' : '';
    const HiremebuttonShadowType = darkMode === false ? 'hiremebuttonshadow' : '';
    const aboutpictureType = darkMode === false ? 'aboutshadow' : null;
    const DefaultTextType = darkMode === false ? 'TexttoBlackAnimation' : 'TexttoWhiteAnimation';
    const lineType = darkMode === false ? 'linearshadowlight': 'linearshadowevelen';
    const divanimationcolor = darkMode === false ? 'rgb(250, 250, 250)' : 'rgb(16, 16, 16)';


    /* -------------- view -------------- */

    header.className = '';

    modeType.forEach((v) => {
        header.classList.add(v);
    })

    body.classList.forEach((ele) => {
        body.classList.remove(ele);
    })

    body.classList.add(defaultmodeType); 

    // all animation elements without a parent must be added manually to light/dark mode

    if (aboutpictureType) {
        aboutpicture.classList.add(aboutpictureType);
    } else {
        aboutpicture.classList.remove('aboutshadow');
    }

    aboutmesection.className = 'Aboutme js-aboutme'
    aboutmesection.classList.add(lightermodeType);

    checksingleElement(experiencepage, 'skills-title-transitionblack');
    checksingleElement(skillstitle, 'skills-title-transitionblack');
    checksingleElement(educationtitle, 'educationexperienceblack');
    checksingleElement(experiencetitlemain, 'educationexperienceblack');
    checksingleElement(githublogo, 'githublogoblack');
    checksingleElement(othertitle, 'jsothertitleblack');
    checksingleElement(experiencetitle, 'experiencetitleblack');
    checksingleElement(projectstitle, 'projectstitleblack');
    checksingleElement(projectsline, 'linearshadowlight');
    checksingleElement(underdescproj, 'underlinedesclight');
    checksingleElement(skillsline, 'linearshadowlight');
    checksingleElement(experienceline, 'linearshadowlight');
    checksingleElement(contactmeline, 'linearshadowlight');
    checksingleElement(experiencepage, 'experiencelight');
    checksingleElement(contactmetitle, 'contacttitlelight')
    checksingleElement(connectrectext, 'connectrectextlight');
    checksingleElement(contactrecdesc, 'contactrecdesclight');
    checksingleElement(ulbackground, 'js-ulcontainerlight')

    skillsline.classList.add(lineType);
    experienceline.classList.add(lineType);

    checkMutipleElements(frontendbackendtitles, 'frontendandbackendtitleBlack');
    checkMutipleElements(skillstext, 'skillrowpblack');
    checkMutipleElements(percentagetext, 'percentagetextblack');
    checkMutipleElements(percentageline, 'percentlineshadow');
    checkMutipleElements(otherskillslinepercentage, 'jsotherpercentageshadow');
    checkMutipleElements(allcontainersproj, 'projectcontainerlight');
    checkMutipleElements(projdesctitle, 'projects-desc-titlelight');
    checkMutipleElements(projectcontainerinfo, 'projectsdescinfolight');
    checkMutipleElements(contacticontext, 'contacticontextlight');
    checkMutipleElements(headerTitles, 'alightmode');

    blackdivanimation.style.backgroundColor = divanimationcolor;
    experiencepage.style.backgroundColor = divanimationcolor;;

    leftheadersection.innerHTML = `
        <p class=${TextShadowType}><span class="titlepor">POR</span><span class="titletfolio ${DefaultTextType}">TFOLIO</span></p>
    `;

    menuIcon.innerHTML = `<i class="fa-solid fa-bars navbarlogo ${DefaultTextType}"></i>`;

    leftHome.innerHTML = `
        <p class="first-line ${DefaultTextType}">Hello! my name is,</p>
        <p class="second-line ${TextShadowType}">Andrew Lambert</p>
        <p class="third-line ${DefaultTextType}">
            I'm a <span>Full Stack Developer</span>
        </p>

        <div class="descritpion">
            <p class="${DefaultTextType}">
                Passionate about creating seamless user experiences, I'm a Computer
                Science major at Wayne State University with a keen interest in full stack development. At 21,
                I've already dabbled in modern web technologies, building projects that bridge the gap between
                design and functionality. Dive into my
                journey and explore the works that fuel my ambition on my About Me page.
            </p>
        </div>

        <a href="#tocontactme" class="hireme-button ${HiremebuttonShadowType}">Hire me</a>
    `;

    aboutright.innerHTML = `
        <p class="aboutme-title ${DefaultTextType}">About me</p>
        <p class="aboutme-desc ${DefaultTextType}">
            ${aboutDesc()}
        </p>
    `;

}

/* -------------- controller -------------- */
ToggleButton.addEventListener('click', () => {
    if (darkMode) {
        darkMode = false;

        if (ToggleButton.classList.contains('darkModeContainertoDarkanim')) {
            ToggleButton.classList.remove('darkModeContainertoDarkanim');
        }

        ToggleButton.classList.add('darkModeContainertoLightanim');
        if (ToggleButtonCircle.classList.contains('lightdarkmodeCircletoDarkanim')) {
            ToggleButtonCircle.classList.remove('lightdarkmodeCircletoDarkanim')
        }
        ToggleButtonCircle.classList.add('lightdarkmodeCircletoLightanim');
        renderWebsiteMode();
    } else {
        darkMode = true;

        if (ToggleButton.classList.contains('darkModeContainertoLightanim')) {
            ToggleButton.classList.remove('darkModeContainertoLightanim');
        }
        ToggleButton.classList.add('darkModeContainertoDarkanim');

        if (ToggleButtonCircle.classList.contains('lightdarkmodeCircletoLightanim')) {
            ToggleButtonCircle.classList.remove('lightdarkmodeCircletoLightanim')
        }
        ToggleButtonCircle.classList.add('lightdarkmodeCircletoDarkanim');
        renderWebsiteMode();
    }
})
