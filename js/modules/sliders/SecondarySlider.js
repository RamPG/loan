import Slider from "./Slider";

export default class SecondarySlider extends Slider {
    constructor({
                    pageBlockSelector = null,
                    containerSelector = null,
                    nextButtonSelector = null,
                    prevButtonSelector = null,
                    activeClass = null
                }) {
        super({
            pageBlockSelector: pageBlockSelector,
            prevButtonSelector: prevButtonSelector,
            nextButtonSelector: nextButtonSelector,
            activeClass: activeClass,
            containerSelector: containerSelector
        });
    }

    nextSlide() {
        try {
            this.slidesContainer.appendChild(this.slides[0]);
            this.slides[0].classList.add(this.activeClass);
            this.slides[this.sliderLength].classList.remove(this.activeClass);
        } catch (e) {
        }

    }

    prevSlide() {
        this.slidesContainer.insertBefore(this.slides[this.sliderLength], this.slides[0])
        this.slides[0].classList.add(this.activeClass);
        this.slides[1].classList.remove(this.activeClass);
    }

    bindSlider() {
        try {
            this.nextButton.addEventListener("click", this.nextSlide.bind(this));
            this.prevButton.addEventListener("click", this.prevSlide.bind(this));
        } catch (e) {
        }
    }

    changeSlidesByTime() {
        setInterval(this.nextSlide.bind(this), 5000);
    }
}