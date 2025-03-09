export const animationElements = [
    {
        observeElement: document.querySelector('.left-home-section'),
        animElement: document.querySelector('.text-section'),
        animationname: 'text-section-anim',
        animationreversename: 'text-section-anim-leave',
        nameofclass: 'left-home-section',
        mutiple: false
    },
    {
        observeElement: document.querySelector('.right-home-section'),
        animElement: document.querySelector('.home-image-container'),
        animationname: 'home-image-container-anim',
        animationreversename: 'home-image-container-anim-leave',
        nameofclass: 'right-home-section',
        mutiple: false
    },
    {
        observeElement: document.querySelector('.left-about-section'),
        animElement: document.querySelector('.js-image-about-animation'),
        animationname: 'aboutme-pictureAnimation',
        nameofclass: 'left-about-section',
        mutiple: false
    },
    {
        observeElement: document.querySelector('.right-about-section'),
        animElement: document.querySelector('.js-right-about-animation'),
        animationname: 'right-about-sectionAnimation',
        nameofclass: 'right-about-section',
        mutiple: false,
    },
    {
        observeElement: document.querySelector('.skillstitlecontainer'),
        animElement: document.querySelector('.js-skills-title-animation'),
        animationname: 'skills-title-anim',
        nameofclass: 'skillstitlecontainer',
        mutiple: true,
        otherAnimationsList: [
            {
                Array: false,
                otherelement: document.querySelector('.js-skills-line-animation'),
                otherelementanimname: 'skills-line-anim'
            }
        ]
    },
    {
        observeElement: document.querySelector('.skills-left-section'),
        animElement: document.querySelector('.js-leftfrontendtitle'),
        animationname: 'js-leftfrontendtitleanim',
        nameofclass: 'skills-left-section',
        mutiple: true,
        otherAnimationsList: [
            {
                Array: true,
                otherelement: document.querySelectorAll('.js-left-skill-row'),
                otherelementanimname: 'js-left-skill-rowanim'
            },
            {
                Array: true,
                otherelement: document.querySelectorAll('.js-left-percentageline'),
                otherelementanimname: 'js-left-percentagelineanim'
            }
        ]
    },
    {
        observeElement: document.querySelector('.skills-right-section'),
        animElement: document.querySelector('.js-rightbackendtitle'),
        animationname: 'js-rightbackendtitleanim',
        nameofclass: 'skills-right-section',
        mutiple: true,
        otherAnimationsList: [
            {
                Array: true,
                otherelement: document.querySelectorAll('.js-right-skill-row'),
                otherelementanimname: 'js-right-skill-rowanim'
            },
            {
                Array: true,
                otherelement: document.querySelectorAll('.js-right-percentageline'),
                otherelementanimname: 'js-right-percentagelineanim'
            }
        ]
    },
    {
        observeElement: document.querySelector('.js-skills-other'),
        animElement: document.querySelector('.js-other-title'),
        animationname: 'js-other-titleanim',
        nameofclass: 'js-skills-other',
        mutiple: true,
        otherAnimationsList: [
            {
                Array: true,
                otherelement: document.querySelectorAll('.js-other-skill-row'),
                otherelementanimname: 'js-other-skill-rowanim'
            },
            {
                Array: true,
                otherelement: document.querySelectorAll('.js-other-percentageline'),
                otherelementanimname: 'js-other-percentagelineanim'
            }
        ]
    },
    {
        observeElement: document.querySelector('.experiencetitlecontainer'),
        animElement: document.querySelector('.experiencetitle'),
        animationname: 'experience-titleanim',
        nameofclass: 'experiencetitlecontainer',
        mutiple: true,
        otherAnimationsList: [
            {
                Array: false,
                otherelement: document.querySelector('.experience-line'),
                otherelementanimname: 'experience-lineanim'
            }
        ]
    },
    {
        observeElement: document.querySelector('.projects-title-section'),
        animElement: document.querySelector('.projects-title'),
        animationname: 'projects-titleanim',
        nameofclass: 'projects-title-section',
        mutiple: true,
        otherAnimationsList: [
            {
                Array: false,
                otherelement: document.querySelector('.projects-line'),
                otherelementanimname: 'projects-lineanim'
            },
            {
                Array: false,
                otherelement: document.querySelector('.under-line-desc'),
                otherelementanimname: 'under-line-descanim'
            }
        ]
    },
    {
        observeElement: document.querySelector('.projects-containers'),
        animElement: document.querySelector('.firstproject-container'),
        animationname: 'firstproject-containeranim',
        nameofclass: 'projects-containers',
        mutiple: true,
        otherAnimationsList: [
            {
                Array: false,
                otherelement: document.querySelector('.secondproject-container'),
                otherelementanimname: 'secondproject-containeranim'
            },
            {
                Array: false,
                otherelement: document.querySelector('.thirdproject-container'),
                otherelementanimname: 'thirdproject-containeranim'
            }
        ]
    },
    {
        observeElement: document.querySelector('.contactitlecontainer'),
        animElement: document.querySelector('.contactmetitle'),
        animationname: 'contactmetitleanim',
        nameofclass: 'contactitlecontainer',
        mutiple: true,
        otherAnimationsList: [
            {
                Array: false,
                otherelement: document.querySelector('.contact-line'),
                otherelementanimname: 'contact-lineanim'
            }
        ]
    },
    {
        observeElement: document.querySelector('.contactmain'),
        animElement: document.querySelector('.contactmeleftsection'),
        animationname: 'contactmeleftsectionanim',
        nameofclass: 'contactmain',
        mutiple: true,
        otherAnimationsList: [
            {
                Array: false,
                otherelement: document.querySelector('.contactmerightsection'),
                otherelementanimname: 'contactmerightsectionanim'
            }
        ]
    },
    {
        observeElement: document.querySelector('.experiencemain'),
        animElement: document.querySelector('.black-div-animation'),
        animationname: 'animateblackdiv',
        nameofclass: 'experiencemain',
        mutiple: false
    }
    
];

export function addAnimation(name) {
    animationElements.forEach((element) => {
        if (element.animationname === name) {
            element.animElement.classList.add(element.animationname);
            if (element.mutiple === true) {
                element.otherAnimationsList.forEach((listItem) => {
                    if (listItem.Array === true) {
                        listItem.otherelement.forEach((ele) => {
                            ele.classList.add(listItem.otherelementanimname)
                        });
                    } else {
                        listItem.otherelement.classList.add(listItem.otherelementanimname); 
                    }
                })
            };
        }
    });
};

export function removeAnimation(name) {
    animationElements.forEach((element) => {
        if (element.animationname === name) {
            element.animElement.classList.remove(element.animationname);

            if (element.mutiple === true) {
                element.otherAnimationsList.forEach((listItem) => {    
                    if (listItem.Array === true) {
                        listItem.otherelement.forEach((ele) => {
                            ele.classList.remove(listItem.otherelementanimname)
                        });
                    } else {
                        listItem.otherelement.classList.remove(listItem.otherelementanimname); 
                        element.animElement.classList.remove(element.animationname);
                    }
                });
            }
        }
    });
};