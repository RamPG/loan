export default class Modal {
    constructor({
                    triggerSelector = null,
                    modalSelector = null,
                    closeSelector = null
                }) {
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