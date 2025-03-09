export const headerTitles = document.querySelectorAll('.js-headera');

export function removeAnimation(element, animName, isArray, isObject, data) {
    if (isArray) {
        element.forEach((ele) => {
            if (ele.classList.contains(animName)) {
                ele.classList.remove(animName);
            }
        });
    } else {
        if (element.classList.contains(animName)) {
            element.classList.remove(animName);
        }
    }

    if (isObject) {
        data.array.forEach((animName) => {
            element.classList.remove(animName);
        })
    }
};

export function addAnimation(element, aninName, isArray) {
    if (isArray) {
        element.forEach((ele) => {
            if (!ele.classList.contains(aninName)) {
                ele.classList.add(aninName);
            }
        });
    } else {
        element.classList.add(aninName);
    }
};

