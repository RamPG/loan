export default class Page {
    constructor({pageSelector = null}) {
        this.page = document.querySelector(pageSelector);
        this.pageBlocks = this.page.children;
    }
}