export default class Accordion {
    constructor({
        accordionHeadersSelector = null,
        accordionBlocksSelector = null,
        toggleClass = null
                }) {
        this.accordionHeaders = document.querySelectorAll(accordionHeadersSelector);
        this.accordionBlocks = document.querySelectorAll(accordionBlocksSelector);
        this.toggleClass = toggleClass
    }
    bindAccordion() {
        this.accordionHeaders.forEach((item, index) => {
            item.addEventListener("click", () => this.accordionBlocks[index].classList.toggle(this.toggleClass))
        })
    }
}