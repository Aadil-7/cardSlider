let slideIndex = 1;
slideShow(slideIndex)

const changeSlide = (n)=>{
    slideShow(slideIndex += n)
}

const slidNave = (n)=>{
    slideShow(slideIndex = n)
}

function slideShow(n) {
    const slides = Array.from(document.getElementsByClassName("slide"))
    const dots = Array.from(document.getElementsByClassName(`dot`))
    if(n > slides.length) {slideIndex = 1 } 
    n < 1 ? slideIndex = slides.length : slideIndex = slideIndex
    slides.forEach(slide => slide.classList.remove(`activeSlide`))
    dots.forEach(dot => dot.classList.remove(`activedot`))
    
    slides[slideIndex - 1].classList.add(`activeSlide`)
    dots[slideIndex - 1].classList.add(`activedot`)
}


 setInterval(()=>changeSlide(1), 3000)