import Page from "../Page";

export default class Slider extends Page {
    constructor(pageSelector, nextButtonSelector, prevButtonSelector) {
        super(pageSelector);
        this.nextButton = this.page.querySelectorAll(nextButtonSelector);
        this.prevButton = this.page.querySelectorAll(prevButtonSelector);
        this.currentSlide = 0;
        this.setDisplayNone();
    }

    setDisplayNone() {
        for (const block of this.pageBlocks) {
            block.style.display = "none";
        }
    }
}