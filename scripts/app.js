const navToggleIcon = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-list');
const portfolioList = document.querySelectorAll('.portfolio-list__item')

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
