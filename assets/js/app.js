let burger = document.querySelector('.burger')
let header = document.querySelector('.header')

burger.addEventListener('click', () => {
    burger.classList.toggle('toggled')
})

document.addEventListener('scroll', (e) => {
    if (scrollY > header.clientHeight) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
})