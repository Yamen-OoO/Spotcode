let choosenLang = 'en'



function switchLangage() {
    // console.log('test')
    let Lang = choosenLang
    let elments = document.querySelectorAll(`[data-currentLangeuage="${Lang}"]`)
    // console.log(Lang)
    // console.log(elments)
    elments.forEach(ele => {
        if (Lang === 'en') {

            ele.textContent = ele.getAttribute('data-arText')
            ele.setAttribute('data-currentLangeuage', 'ar')
            ele.style.fontFamily = 'Noto Kufi Arabic, sans-serif'

        }
        else if (Lang === 'ar') {
            ele.textContent = ele.getAttribute('data-enText')
            ele.setAttribute('data-currentLangeuage', 'en')
            ele.style.fontFamily = 'Poppins, sans-serif';
        }
    })
    if (choosenLang === 'en') {
        choosenLang = 'ar'
    }
    else {
        choosenLang = 'en'
    }
}


let buttons = document.querySelectorAll('.languages button')
console.log(buttons)

buttons.forEach((button , i) => {
    button.addEventListener("click", function () {
        if(button.classList.contains('active')) return
        removeActiveClass()
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })
        window.setTimeout(() => {
            switchLangage()
            console.log(choosenLang)
        }, 1000)
        button.classList.add('active')

    })
})


function removeActiveClass(){
    buttons.forEach(button => button.classList.remove('active'))
}