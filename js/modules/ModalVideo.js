import Modal from "./Modal";

export default class ModalVideo extends Modal {
    constructor(pageSelector, triggerSelector, modalSelector, closeSelector) {
        super(pageSelector, triggerSelector, modalSelector, closeSelector);

    }

    createPlayer() {
        this.player = new YT.Player('frame', {
                height: '100%',
                width: '100%',
                videoId: this.trigger.getAttribute("data-url"),
            }
        );
    }

    bindPlay() {
        this.trigger.addEventListener("click", () => {
            if (!this.player) {
                this.createPlayer();
            }
        })
    }

    bindStop() {
        this.close.addEventListener("click", () => {
            this.player.stopVideo();
        })
    }

    initAPI() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        this.bindPlay();
        this.bindStop();
    }
}