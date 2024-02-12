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

priceSelect()
collapse()
possibleTabs()

const blogSwiper = new Swiper('.blog-swiper', {
    spaceBetween: 40,
    slidesPerView: 4,
    loop: true
})