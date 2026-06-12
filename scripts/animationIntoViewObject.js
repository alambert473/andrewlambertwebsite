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
        observeElement: document.querySelector('.js-skills-grid-wrapper'),
        animElement: document.querySelector('.js-skills-grid'),
        animationname: 'skills-grid-anim',
        nameofclass: 'js-skills-grid-wrapper',
        mutiple: false
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
    },
    {
        observeElement: document.querySelector('.testimonials-title-section'),
        animElement: document.querySelector('.js-testimonials-title'),
        animationname: 'testimonials-titleanim',
        nameofclass: 'testimonials-title-section',
        mutiple: true,
        otherAnimationsList: [
            {
                Array: false,
                otherelement: document.querySelector('.js-testimonials-line'),
                otherelementanimname: 'testimonials-lineanim'
            }
        ]
    },
    {
        observeElement: document.querySelector('.testimonials-container'),
        animElement: document.querySelector('.firsttestimonial-card'),
        animationname: 'firsttestimonial-cardanim',
        nameofclass: 'testimonials-container',
        mutiple: true,
        otherAnimationsList: [
            {
                Array: false,
                otherelement: document.querySelector('.secondtestimonial-card'),
                otherelementanimname: 'secondtestimonial-cardanim'
            }
        ]
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