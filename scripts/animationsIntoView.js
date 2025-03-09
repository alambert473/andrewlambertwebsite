import { animationElements, addAnimation, removeAnimation } from "./animationIntoViewObject.js";

const rightheaderSection =  document.querySelector('.right-header-section');
const lightdarkcontainer = document.querySelector('.lightdarkModeContainer');

const Observer = new IntersectionObserver((observeelement) => {
    observeelement.forEach((element) => {
        const elementclassList = element.target.classList;
        let DOMItem;

        if (element.isIntersecting === true) {
            animationElements.forEach((ele) => {
                elementclassList.forEach(element => {
                    if (ele.nameofclass === element) {
                        DOMItem = ele.animationname;
                    }
                }); 
            });

            addAnimation(DOMItem);
        } else {
            animationElements.forEach((ele) => {
                elementclassList.forEach(element => {
                    if (ele.nameofclass === element) {
                        DOMItem = ele.animationname;
                    }
                }); 
            });

            removeAnimation(DOMItem);
        }
    });
}, {
    threshold: 0.2
});

rightheaderSection.addEventListener('animationend', () => {
    animationElements.forEach((listItem) => {
        Observer.observe(listItem.observeElement);
    });
});

lightdarkcontainer.addEventListener('animationend', () => {
    lightdarkcontainer.classList.remove('lightdarkmodecontaineranim');
});