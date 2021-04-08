const menuBtn = document.querySelector('.humberger-btn')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open')
        menuOpen = true
    }else {
        menuBtn.classList.remove('open')
        menuOpen = false
    }
})