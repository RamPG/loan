import Slider from "./Slider";

export default class MainSlider extends Slider {
    constructor(page, nextButtonSelector) {
        super(page, nextButtonSelector);
        this.currentSlide = 0;
        this.sliderLength = this.pageBlocks.length - 1;
    }

    hideSlide() {
        this.pageBlocks[this.currentSlide].style.display = "none";
    }

    showSlide() {
        this.pageBlocks[this.currentSlide].style.display = "block";
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
        this.showSlide();
        this.nextButton.forEach((item) => {
            item.addEventListener("click", () => {
                    this.nextSlide();
                }
            )
        });
    }
}