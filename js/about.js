let sections = document.querySelectorAll('section')
sections.forEach(sec => {
    let balls = 10
    for (let i = 0; i <= balls - 1; i++) {
        let ball = document.createElement("div")
        if (i < 5) {
            ball.classList.add("ball1")
        }
        else {
            ball.classList.add("ball2")
        }

        // ball.classList.add("rellax")
        ball.style.left = Math.floor(Math.random() * 80) + "%"
        ball.style.top = Math.floor(Math.random() * 90) + "%"
        // ball.setAttribute("data-rellax-speed" ,-2)
        sec.appendChild(ball)
        // window.addEventListener('scroll', function () {
        //     var rotation = window.scrollY / 10; // Adjust the division factor to control the rotation speed
        //     ball.style.transform = 'rotate(' + rotation + 'deg)';
        // })
    }
})