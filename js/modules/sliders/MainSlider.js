import Slider from "./Slider";

export default class MainSlider extends Slider {
    constructor(pageSelector, nextButtonSelector) {
        super(pageSelector, nextButtonSelector);
        this.currentSlide = 0;
        this.sliderLength = this.pageBlocks.length - 1;
    }
    hideSlide(currentSlide = this.currentSlide) {
        this.currentSlide = currentSlide;
        this.pageBlocks[currentSlide].style.display = "none";
    }

    showSlide(currentSlide = this.currentSlide) {
        this.currentSlide = currentSlide;
        this.pageBlocks[currentSlide].style.display = "block";
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
        this.showSlide(0);
        this.nextButton.forEach((item) => {
            item.addEventListener("click", () => this.nextSlide())
        });
    }
}