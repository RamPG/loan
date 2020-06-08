export default class Download {
    constructor({
                    filePath = null,
                    triggerSelector = null
                }) {
        this.filePath = filePath;
        this.triggers = document.querySelectorAll(triggerSelector);
    }

    downloadFile() {
        const element = document.createElement('a');

        element.setAttribute('href', this.filePath);
        element.setAttribute('download', 'nice_picture');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    bindDownload() {
        this.triggers.forEach((item) => {
            item.addEventListener("click", () => this.downloadFile());
        })
    }
}