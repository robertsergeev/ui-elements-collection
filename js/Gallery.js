class Galery{
    constructor(img, selectors) {
        this.img = img;
        this.selectors = [...selectors];
        this.init();
    }

    init() {
        this.selectors.forEach(selector => {
            selector.addEventListener('click', this.chooseImg.bind(this, selector));
        });
    }

    chooseImg(selector) {
        this.img.src = selector.src;
    }
}

const img = document.getElementById('gallery-img');
const selectors = document.querySelectorAll('.gallery-selector img');
new Galery(img, selectors)
