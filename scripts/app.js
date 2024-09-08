const navToggleIcon = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-list');
const portfolioList = document.querySelectorAll('.portfolio-list__item')
const scrollHeader = document.querySelector('.header__scroll')
const buttonToUp = document.querySelector('.footer-top__btn')
const statisticsContentPercents = document.querySelectorAll(".statistics-content__percent")
const btnCounter = document.querySelector("#btn__counter")



let count = 0
navToggleIcon.addEventListener('click', function() {
    this.classList.toggle('nav-toggle--open');
    menu.classList.toggle('nav-list--open');
});


portfolioList.forEach(portfolioList => {
    portfolioList.addEventListener('click',function (){
        document.querySelector('.portfolio-list__item--active').classList.remove('portfolio-list__item--active')
        document.querySelector('.portfolio__wrapper--show').classList.remove('portfolio__wrapper--show')
        this.classList.add('portfolio-list__item--active')
        let contentId = this.getAttribute('data-content-id')
        document.querySelector(contentId).classList.add('portfolio__wrapper--show')
    })
})

// For Header Scroll Y ==> Top Header
window.addEventListener('scroll' , function () {
    let scrollTop = window.scrollY
    let documentHeight = document.body.clientHeight
    let windowInnerHeight = window.innerHeight
    let scrollPercent = (scrollTop / (documentHeight - windowInnerHeight) * 100)
    let scrollPercentRounded = Math.round(scrollPercent)
    scrollHeader.style.width = scrollPercentRounded + '%'
})

buttonToUp.addEventListener('click' , function () {
    window.scrollTo(0 , 0)
})

window.addEventListener("scroll" , () => {
    statisticsContentPercents.forEach(statisticsContentPercent => {
        if (btnCounter.offsetTop < Math.floor(window.scrollY)){
            setInterval(() => {
                const target = parseInt(statisticsContentPercent.dataset.count)
                if (count < target) {
                    count++
                    statisticsContentPercent.innerHTML = count + "%"
                } else {
                    statisticsContentPercent.innerHTML = target + "%"
                }
            },200)
        }
    })
})


const homeLeftTitle = document.querySelector("#home-left__title")

let homeLeftTitleTypeWriter = new Typewriter(homeLeftTitle, {
  loop: true,
});

homeLeftTitleTypeWriter 
    .typeString("Wilkerson")
    .pauseFor(1000)
    .typeString(" Hardin")
    .pauseFor(2500)
    .start()