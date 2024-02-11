function collapse() {
    const triggers = document.querySelectorAll('.faq-question')

    triggers.forEach(function(item) {
        item.addEventListener('click', function() {
            let answer = item.nextElementSibling
            if (item.closest('.faq__block').classList.contains('active')) {
                answer.style.height = ''
            } else {
                answer.style.height = answer.scrollHeight + 'px'
            }
            item.closest('.faq__block').classList.toggle('active')
        })
    })
}

function scrollTasks() {
    const triggers = document.querySelectorAll('.task__card')

    triggers.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault()
            let id = item.getAttribute('href')
            let block = document.querySelector(id)
            block.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        })
    })
}

function priceSelect() {
    const triggers = document.querySelectorAll('.table__item-body')
    const btn = document.querySelector('.price-btn')

    triggers.forEach(item => {
        item.addEventListener('click', function() {
            btn.classList.add('active')
        })
    })
}

priceSelect()

const swiper = new Swiper('.clients-swiper', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    speed: 600,
    loop: true,
    navigation: {
        prevEl: '.swiper-prev',
        nextEl: '.swiper-next'
    },
    breakpoints: {
        1340: {
            slidesPerView: 6,
        }
    }
});

collapse()
scrollTasks()

function possibleTabs() {
    const tabs = document.querySelectorAll('.possible-tab')
    const contentBlocks = document.querySelectorAll('.possible-item')

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            tabs.forEach(function(tab) {
                tab.classList.remove('active')
            })

            contentBlocks.forEach(function(block) {
                block.classList.remove('active')
            })

            const tabIndex = Array.from(tabs).indexOf(tab)
            tab.classList.add('active')
            contentBlocks[tabIndex].classList.add('active')
        })
    })
}

possibleTabs()