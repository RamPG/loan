export default class Difference {
    constructor({
                    officerSelector = null,
                    differenceCardSelector = null,
                    showSelector = null
                }) {
        this.officer = document.querySelector(officerSelector);
        this.officerCards = this.officer.querySelectorAll(`${differenceCardSelector}:not(${showSelector})`);
        this.officerShowButton = this.officer.querySelector(showSelector);
        this.officerCurrent = 0;
        this.setDisplayNone();
    }

    setDisplayNone() {
        this.officerCards.forEach((item) => item.style.display = "none");
    }

    officerBind() {
        this.officerShowButton.addEventListener("click", () => {
            this.officerCards[this.officerCurrent].style.display = "flex";
            this.officerCurrent++;
            if (this.officerCurrent === 3) {
                this.officerShowButton.remove();
            }
        })
    }

}