export default class Slider {
    constructor({
                    pageBlockSelector = null,
                    containerSelector = null,
                    nextButtonSelector = null,
                    prevButtonSelector = null,
                    activeClass = null,
                }) {
        this.pageBlock = document.querySelector(pageBlockSelector);
        this.slidesContainer = document.querySelector(containerSelector);
        try {
            this.nextButton = this.pageBlock.querySelector(nextButtonSelector);
        } catch (e) {
        }
        try {
            this.prevButton = this.pageBlock.querySelector(prevButtonSelector);
        } catch (e) {
        }
        try {
            this.slides = this.slidesContainer.children;
        } catch (e) {
        }
        this.activeClass = activeClass;
        this.currentSlide = 0;
        try {
            this.sliderLength = this.slides.length - 1;
        } catch (e) {
        }
    }

    setDisplayNone() {
        try {
            for (const slide of this.slides) {
                slide.style.display = "none";
                slide.classList.remove(this.activeClass);
            }
        } catch (e) {
        }

    }
}