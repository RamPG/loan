import MainSlider from "./sliders/MainSlider";

export default class MainSliderPopup extends MainSlider {
    constructor({
                    containerSelector = null,
                    nextButtonSelector = null,
                    popupSelector = null
                }) {
        super({
            containerSelector: containerSelector,
            nextButtonSelector: nextButtonSelector
        });
        this.popup = document.querySelector(popupSelector);
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

    bindPopup() {
        this.nextButton.forEach((item) => {
            item.addEventListener("click", () => {
                    try {
                        if (this.slides[2].style.display === "block") {
                            this.setTimer()
                        } else {
                            clearTimeout(this.timeoutID);
                            this.closePopup();
                        }
                    } catch (e) {
                    }

                }
            )
        });
    }
}