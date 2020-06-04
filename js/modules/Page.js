export default class Page {
    constructor(pageSelector) {
        this.page = document.querySelector(pageSelector);
        this.pageBlocks = this.page.children;
    }
}