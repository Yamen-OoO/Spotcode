// // the paid version (the customer own version , we only change the values of the root to the choosen color by him and keep the theme functionality working)
import ColorsPlatte from './library.js'

let pageSettings = {
    themeColor: 'dark',
    themeColorPlatte: {},

    //! paid version comment these
    mainColor: 'orange',
    mainColorPlatte: {},
    setMainColor: function (choosenColor) {
        // console.log(this)
        this.mainColor = choosenColor
        this.mainColorPlatte = ColorsPlatte.mainColor[choosenColor]
    },

    //! paid version dont comment
    setThemeColorPlatte: function (choosenColor) {
        this.themeColor = choosenColor
        this.themeColorPlatte = ColorsPlatte.theme[choosenColor]
    }
}



//~ when click on a color .... change pageSettings.mainColor , pageSettings.mainColorPlatte
//~ change the values of the variables of the in css 
let root = document.querySelector(":root") //html element
let rootCssValues = getComputedStyle(root) // return all the css attributes (css variables are css attributes)

function changeRootValuesThemes(choosenColor) {
    pageSettings.setThemeColorPlatte(choosenColor)
    Object.keys(pageSettings.themeColorPlatte).forEach(variable => {
        // console.log(variable)
        // console.log(pageSettings.themeColorPlatte[variable])
        root.style.setProperty(variable, pageSettings.themeColorPlatte[variable])
        // console.log(rootCssValues.getPropertyValue(variable))
    });
    // console.log(pageSettings.themeColor)
    // console.log(pageSettings.themeColorPlatte)

}

// ! only the live the demo this functionality should be exisist

function changeRootValuesMainColor(choosenColor) {
    pageSettings.setMainColor(choosenColor)
    Object.keys(pageSettings.mainColorPlatte).forEach(variable => {
        // console.log(variable)
        // console.log(pageSettings.mainColorPlatte[variable])
        root.style.setProperty(variable, pageSettings.mainColorPlatte[variable])
        // console.log(rootCssValues.getPropertyValue(variable))
    });
    // console.log(pageSettings.mainColor)
    // console.log(pageSettings.mainColorPlatte)
}







//! paid version comment these
// ^ open switcher menu and clicking function

let switcherButton = document.querySelector(".switcher-button")
let menu = switcherButton.parentElement
switcherButton.addEventListener('click', togglemenu)

function togglemenu() {
    // console.log('testtttt')
    if (menu.classList.contains("open")) {
        menu.classList.remove('open')
    }
    else {
        menu.classList.add('open')
    }
}
let switcherButtons = document.querySelectorAll(".color-switcher-container .menu button")
switcherButtons.forEach(button => {
    button.addEventListener('click', function () {
        let choosenColor = button.getAttribute("data-color")
        changeRootValuesMainColor(choosenColor)
        menu.classList.remove('open')

    })
})










//^ theme toggler
let themeButtons = document.querySelectorAll('nav .theme-toggler')
themeButtons.forEach(button => {
    button.addEventListener('click', function () {
        let choosenColor = button.getAttribute("data-theme")
        changeRootValuesThemes(choosenColor)
    })
})
