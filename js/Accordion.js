class Accordion {
    constructor(btn, hiddenElement) {
        this.btn = btn;
        this.hiddenElement = hiddenElement;

        if (this.btn && this.hiddenElement) {
            this.opened = false;
            this.btnText = this.btn.textContent;
            this.init();
        }
    }

    init() {
        this.btn.addEventListener("click", this.toggle.bind(this));
    }

    toggle() {
        if (!this.opened) {
            this.opened = true;

            this.hiddenElement.style.display = "block";
            this.btn.textContent = "- Close";
        } else {
            this.opened = false;

            this.hiddenElement.style.display = "none";
            this.btn.textContent = this.btnText;
        }
    }
}

const btns = document.querySelectorAll(".accordion button");

btns.forEach((btn) => {
    const text = btn.nextElementSibling;
    new Accordion(btn, text);
});
