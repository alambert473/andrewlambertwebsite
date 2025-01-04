const pages = document.querySelectorAll('section');
const headerTitles = document.querySelectorAll('.js-headera');

function removeActive(name) {
    headerTitles.forEach((element) => {
        if (!element.classList.contains(name)) {
            element.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    pages.forEach((element) => {
        const topofelement = element.offsetTop;
        const bottomofelement = element.offsetHeight;

        /*console.log(`scroll position: ${scrollPosition} compared to top of element (${topofelement}) and element height (${bottomofelement})`); */

        if (scrollPosition >= topofelement - 400 && scrollPosition < topofelement + bottomofelement) {
            headerTitles.forEach((title) => {

                const sectionlist = element.classList;
                const headerlist = title.classList;

                sectionlist.forEach((sectionlistName) => {
                    headerlist.forEach((headerlistname) => {
                        if (sectionlistName === headerlistname) {
                            if (!document.querySelector(`.${headerlistname}`).classList.contains('active')) {
                                removeActive(headerlistname);

                                document.querySelector(`.${headerlistname}`).classList.add('active');
                            }
                        }
                    });
                });
            });
        }
    }); 
}); 