
let menuBtn = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', () => {
    let img = menuBtn.querySelector('img');
    
    let menu = document.querySelector('.menu');
    menu.classList.toggle('visible');

    if (menu.classList.contains('visible')) {
        img.src = 'icons/icon_cross.svg';
    } else {
        img.src = 'icons/icon hamburger.svg';
    }
})

let menuArrow = document.querySelector('.menu-arrow');

menuArrow.addEventListener('click', () => {
    let items = document.querySelector('.course-items');
    items.classList.toggle('visible')

    if (items.classList.contains('visible')) {
        menuArrow.src = 'icons/menu_arrow.svg'
    } else {
        menuArrow.src = 'icons/icon arrow.svg'
    }
})

let navigationArrow = document.querySelector('.navigation-item-arrow');

navigationArrow.addEventListener('click', () => {
    let items = document.querySelector('.course-items-desctop');
    items.classList.toggle('visible')

    if (items.classList.contains('visible')) {
        navigationArrow.src = 'icons/menu_arrow.svg'
    } else {
        navigationArrow.src = 'icons/icon arrow.svg'
    }
})

let moreInfoBtns = document.querySelectorAll('.more')

moreInfoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let popup = document.querySelector('.popup');
        popup.classList.toggle('visible')

        let overlay = document.createElement('div')
        overlay.classList.add('overlay')
        let main = document.querySelector('.main')
        main.appendChild(overlay)

        

        
    })
})

let close = document.querySelectorAll('.cross')

close.forEach(btn => {
    btn.addEventListener('click', () => {
        let popup = document.querySelector('.popup');
        popup.classList.toggle('visible')

        let main = document.querySelector('.main')
        let overlay = document.querySelector('.overlay')
        main.removeChild(overlay)
        console.log('hi')
    })      
})
  
