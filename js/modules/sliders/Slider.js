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
        try {this.nextButton = this.pageBlock.querySelector(nextButtonSelector);} catch (e) {}
        try {this.prevButton = this.pageBlock.querySelector(prevButtonSelector);} catch (e) {}
        this.slides = this.slidesContainer.children;
        this.activeClass = activeClass;
        this.currentSlide = 0;
        this.sliderLength = this.slides.length - 1;
    }

    setDisplayNone() {
        for (const slide of this.slides) {
            slide.style.display = "none";
            slide.classList.remove(this.activeClass);
        }
    }
}