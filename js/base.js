const currentUrl = window.location.href;
// console.log("Current URL:", currentUrl);
fetch(currentUrl)
    .then(response => {
        if (response.status === 404) {
            throw new Error(404);
        }
        if (response.status === 403) {
            throw new Error(403);
        }
        if (response.status === 500) {
            throw new Error(500);
        }
        return response.text();
    })
    // .then(data => {
    //     // Process the response data if needed
    //     console.log(data);
    // })
    .catch(error => {
        console.error('Error fetching page:', error);
        if (error === 404) window.location.href = '404.html';
        if (error === 403) window.location.href = '403.html';
        if (error === 500) window.location.href = '500.html';
    });


var rellax = new Rellax('.rellax')





let lineScroll = document.querySelector("#line")

let fullHieght = document.documentElement.scrollHeight
let currentHieght = document.documentElement.clientHeight
let hieght = fullHieght - currentHieght

window.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop
    lineScroll.style.height = `${(scrollTop / hieght) * 100}%`
})




let nav = document.querySelector('nav')
let menu = document.querySelector(".nav-links")
let MenuLinks = document.querySelectorAll(".nav-links .container .menu-left ul li")
function openMenu() {
    menu.classList.toggle("open")
    if (menu.classList.contains('open')) {
        document.body.style.overflowY = 'hidden'
    }
    else {
        document.body.style.overflowY = 'auto'
    }
}
const pos = document.documentElement
pos.addEventListener('mousemove', function (e) {
    pos.style.setProperty('--x', e.clientX + 'px')
    pos.style.setProperty('--y', e.clientY + 'px')
})




let gototop = document.querySelector("#gototop")
gototop.onclick = function () {
    window.scrollTo(0, 0)
    gototop.style.display = "none"

}

window.addEventListener('scroll', () => {
    if (window.scrollY >= 1000) {
        gototop.style.display = "flex"
    }
    else {
        gototop.style.display = "none"
    }
})