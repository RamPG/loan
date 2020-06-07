import Slider from "./Slider";

export default class MainSlider extends Slider {
    constructor({
                    containerSelector = null,
                    nextButtonSelector = null,
                    slidesSelector = null,
                    activeClass = null

                }) {
        super({
            containerSelector: containerSelector,
            nextButtonSelector: nextButtonSelector,
            slidesSelector: slidesSelector,
            activeClass: activeClass
        });
        this.nextButton = document.querySelectorAll(nextButtonSelector);
    }

    hideSlide(currentSlide = this.currentSlide) {
        try {
            this.currentSlide = currentSlide;
            this.slides[currentSlide].style.display = "none";
            this.slides[currentSlide].classList.remove(this.activeClass);
        } catch (e) {
        }

    }

    showSlide(currentSlide = this.currentSlide) {
        try {
            this.currentSlide = currentSlide;
            this.slides[currentSlide].style.display = "block";
            this.slides[currentSlide].classList.add(this.activeClass);
        } catch (e) {
        }
    }

    nextSlide() {
        this.hideSlide();
        if (this.currentSlide === this.sliderLength) {
            this.currentSlide = 0;
        } else {
            this.currentSlide++;
        }
        this.showSlide();
    }

    bindSlider() {
        try {
            this.showSlide(0);
            this.nextButton.forEach((item) => {
                item.addEventListener("click", this.nextSlide.bind(this))
            });
        } catch (e) {
        }

    }

    logoBind(triggerSelector) {
        const trigger = document.querySelectorAll(triggerSelector);
        trigger.forEach((item) => {
            item.addEventListener("click", () => {
                this.setDisplayNone();
                this.showSlide(0);
                this.currentSlide = 0;
            })
        });
    }
}