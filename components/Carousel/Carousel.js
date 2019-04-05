class Carousel {
    constructor(element) {
        this.element = element;
        // this.buttons = document.querySelectorAll('.carousel .button');
        console.log(this.element);
    }
}

class CarouselButton {
    constructor(element) {
        this.element = element;
        // console.log(element.dataset.button);
        this.btnSide = element.dataset.button;
        element.addEventListener('click', () => this.buttonClick())
    }

    buttonClick() {
        console.log(this.btnSide + 'click');
        console.log(pictures.length);
        // let activeSlide = document.querySelector('.img-active');
        // console.log(activeSlide);
        // activeSlide.classList.remove('img-active');
    }
}

let carousel = document.querySelectorAll('.carousel *');
// console.log(carousel);
// carousel.forEach(el => new Carousel(el));

let pictures = document.querySelectorAll('.carousel img');
// console.log(pictures[1])

let buttons = document.querySelectorAll('.carousel .button');
buttons.forEach(el => new CarouselButton(el));



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/