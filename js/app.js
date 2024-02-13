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

function priceSelect() {
    const triggers = document.querySelectorAll('.table__item-body')

    triggers.forEach(item => {
        item.addEventListener('click', function() {
            const btn = item.closest('.table').querySelector('.price-btn')
            btn.classList.add('active')
        })
    })
}

function possibleTabs() {
    const possibleBlock = document.querySelector('.possible__main.desktop')
    const tabs = possibleBlock.querySelectorAll('.possible-tab')
    const contentBlocks = possibleBlock.querySelectorAll('.possible-item')

    tabs[0].classList.add('active')
    contentBlocks[0].classList.add('active')

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

function possibleCollapse() {
    const possibleBlock = document.querySelector('.possible__main.mobile')
    const triggerBtns = possibleBlock.querySelectorAll('.possible-tab')

    triggerBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            let currentBlock = btn.nextElementSibling

            if (btn.classList.contains('active')) {
                currentBlock.style.height = ''
            } else {
                currentBlock.style.height = currentBlock.scrollHeight + 80 + 'px'
            }

            btn.classList.toggle('active')
            currentBlock.classList.toggle('active')
        })
    })
}

priceSelect()
collapse()

if(window.innerWidth >= 999) {
    possibleTabs()
} else {
    possibleCollapse()
}

const blogSwiper = new Swiper('.blog-swiper', {
    spaceBetween: 20,
    slidesPerView: 2,
    loop: true,
    breakpoints: {
        1440: {
            spaceBetween: 40,
            slidesPerView: 3,
        },
        1600: {
            slidesPerView: 4,
        },
    }
})