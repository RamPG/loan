import Slider from "./sliders/Slider";

export default class MainSliderPopup extends Slider {
    constructor(pageSelector, nextButtonSelector, popupSelector) {
        super(pageSelector, nextButtonSelector);
        this.popup = this.page.querySelector(popupSelector);
        this.closePopup();
    }

    openPopup() {
        this.popup.style.display = "block";
    }

    closePopup() {
        this.popup.style.display = "none";
    }

    setTimerOnPopup() {
        this.nextButton.forEach((item) => {
            item.addEventListener("click", () => {
                    if (this.pageBlocks[2].style.display === "block") {
                        setTimeout(() => this.openPopup(), 3000);
                    }
                    else {
                        this.closePopup();
                    }
                }
            )
        });
    }
}