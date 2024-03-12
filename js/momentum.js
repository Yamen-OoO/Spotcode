
// //just add the smooth-scroll-wrapper to containe all the page .... then add content after it 

// const body = document.body
// scrollWrap = document.getElementById("smooth-scroll-wrapper")
// console.log(scrollWrap)
// height = scrollWrap.getBoundingClientRect().height - 1,
// console.log(height)
// console.log(window.height)
// speed = 0.04;

// var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
// offset += (window.pageYOffset - offset) * speed;

// var scroll = "translateY(-" + offset + "px) translateZ(0)";
// scrollWrap.style.transform = scroll;

// callScroll = requestAnimationFrame(smoothScroll);
// }

// smoothScroll();






// add id to body   ...... no more parallax and aos working all js script not gonna work such as magicescroll navscrollbacground pages edited (project , index , about)
var options = {
    'damping': 0.05,
    'alwaysShowTraks': false
}



var Scrollbar = window.Scrollbar;
Scrollbar.init(document.querySelector('#my-scrollbar'), options);
// console.log(Scrollbar)