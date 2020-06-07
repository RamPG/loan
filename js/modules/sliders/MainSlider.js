import Slider from "./Slider";

export default class MainSlider extends Slider {
    constructor({
                    containerSelector = null,
                    nextButtonSelector = null,
                    prevButtonSelector = null,
                    slidesSelector = null,
                    activeClass = null

                }) {
        super({
            containerSelector: containerSelector,
            nextButtonSelector: nextButtonSelector,
            prevButtonSelector: prevButtonSelector,
            slidesSelector: slidesSelector,
            activeClass: activeClass
        });
        try {
            this.nextButton = document.querySelectorAll(nextButtonSelector);
        } catch (e) {

        }
        try {
            this.prevButton = document.querySelectorAll(prevButtonSelector);
        } catch (e) {

        }
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

    prevSlide() {
        this.hideSlide();
        if (this.currentSlide === 0) {
            this.currentSlide = this.sliderLength;
        } else {
            this.currentSlide--;
        }
        this.showSlide();
    }

    bindSlider() {
        this.showSlide(0);
        try {
            this.nextButton.forEach((item) => {
                item.addEventListener("click", this.nextSlide.bind(this))
            });
        } catch (e) {
        }
        try {
            this.prevButton.forEach((item) => {
                item.addEventListener("click", this.prevSlide.bind(this));
            })
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