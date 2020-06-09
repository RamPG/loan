import Modal from "./Modal";

export default class ModalVideo extends Modal {
    constructor({
                    triggerSelector = null,
                    modalSelector = null,
                    closeSelector = null,
                    blockSelector = null
                }) {
        super({
            triggerSelector: triggerSelector,
            modalSelector: modalSelector,
            closeSelector: closeSelector
        });
        this.blocksVideo = document.querySelectorAll(blockSelector);
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);

    }

    createPlayer() {
        this.player = new YT.Player('frame', {
                height: '100%',
                width: '100%',
                videoId: this.trigger.getAttribute("data-url"),
                events: {
                    'onStateChange': this.onPlayerStateChange
                }
            }
        );
    }

    bindPlay() {
        this.trigger.addEventListener("click", () => {
            this.trigger.parentElement.classList.add("active");
            if (!this.player) {
                this.createPlayer();
            }
        })
    }

    bindStop() {
        this.close.addEventListener("click", () => {
            try {
                this.trigger.parentElement.classList.remove("active");
                this.player.stopVideo();
            } catch (e) {
            }
        })
    }

    onPlayerStateChange(evt) {
        if (evt.data === 0) {
            for (let i = 0; i < this.blocksVideo.length; i += 2) {
                if (this.blocksVideo[i].classList.contains("active")) {
                    const playBtn = this.blocksVideo[i].querySelector('svg').cloneNode(true);
                    this.blocksVideo[i + 1].querySelector('.play__circle').classList.remove('closed');
                    this.blocksVideo[i + 1].querySelector('svg').remove();
                    this.blocksVideo[i + 1].querySelector('.play__circle').appendChild(playBtn);
                    this.blocksVideo[i + 1].querySelector('.play__text').textContent = 'play video';
                    this.blocksVideo[i + 1].querySelector('.play__text').classList.remove('attention');
                    this.blocksVideo[i + 1].style.opacity = 1;
                    this.blocksVideo[i + 1].querySelector(".play__circle").addModal();
                    this.blocksVideo[i + 1].querySelector(".play__circle").initAPI();
                    this.blocksVideo[i + 1].style.filter = 'none';
                    break
                }
            }
        }
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