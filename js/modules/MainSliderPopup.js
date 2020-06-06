import Slider from "./sliders/Slider";

export default class MainSliderPopup extends Slider {
    constructor(pageSelector, nextButtonSelector, popupSelector) {
        super(pageSelector, nextButtonSelector);
        this.popup = this.page.querySelector(popupSelector);
        this.timeoutID = undefined;
    }

    openPopup() {
        this.popup.style.display = "block";
    }

    closePopup() {
        this.popup.style.display = "none";
    }

    setTimer() {
        this.timeoutID = setTimeout(this.openPopup.bind(this), 3000);
    }

    setTimerOnPopup() {
        this.nextButton.forEach((item) => {
            item.addEventListener("click", () => {
                    if (this.pageBlocks[2].style.display === "block") {
                        this.setTimer()
                    } else {
                        clearTimeout(this.timeoutID);
                        this.closePopup(); // Не работает при первом открытии слайда
                    }
                }
            )
        });
    }
}