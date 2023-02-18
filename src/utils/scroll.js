
function headerScroll () {
    const header = document.querySelector('.header');
    if (window.pageYOffset > 180) {
        header.classList.add('_fixed');
    } else {
        header.classList.remove('_fixed');
    }
}

window.onscroll = headerScroll ();