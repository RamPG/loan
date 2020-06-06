import Page from "./Page";

export default class Modal extends Page {
    constructor({
                    pageSelector = null,
                    triggerSelector = null,
                    modalSelector = null,
                    closeSelector = null
                }) {
        super({pageSelector: pageSelector});
        this.page = document.querySelector(pageSelector);
        this.trigger = document.querySelector(triggerSelector);
        this.modal = document.querySelector(modalSelector);
        this.close = document.querySelector(closeSelector);
    }

    bindTrigger() {
        this.trigger.addEventListener("click", () => {
            this.modal.style.display = "flex";
        });
    }

    bindClose() {
        this.close.addEventListener("click", () => {
            this.modal.style.display = "none";
        })
    }

    addModal() {
        this.bindTrigger();
        this.bindClose();
    }

}