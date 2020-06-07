export default class Form {
    constructor({
                    formSelector = null,
                    path = null
                }) {
        try {
            this.form = document.querySelector(formSelector);
        } catch (e) {
        }
        this.path = path;
        this.messages = {
            loading: 'Loading...',
            success: 'Thank You! We will contact you soon!',
            failure: 'Something went wrong...',
        };
    }

    clearInputs() {
        this.form.querySelectorAll("input").forEach((item) => item.value = "");
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    };

    statusBlock() {
        this.messages = {
            loading: 'Loading...',
            success: 'Thank You! We will contact you soon!',
            failure: 'Something went wrong...',
        };
        this.status = document.createElement("div");
        this.status.classList.add("status");
        this.form.appendChild(this.status);
    }

    bindForm() {
        try {
            this.statusBlock();
            this.form.addEventListener("submit", (evt) => {
                evt.preventDefault();
                this.status.textContent = this.messages.loading;
                const formData = new FormData(this.form);
                this.postData("../assets/question.php", formData)
                    .then(() => {
                        this.clearInputs();
                        this.status.textContent = this.messages.success;
                    })
                    .catch(() => {
                        this.clearInputs();
                        this.status.textContent = this.messages.failure;
                    })
                    .finally(() => {
                        setTimeout(() => this.status.remove(), 5000);
                    })
            });
        } catch (e) {
        }

    }
}