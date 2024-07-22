class SliderFade extends Slider{
    constructor(images, prevBtn, nextBtn) {
        super(images, prevBtn, nextBtn)
    }

    showPrevSlide() {
        this.images[this.currentImg].classList.remove('active');
        if(this.currentImg <= 0) {
            this.currentImg = this.images.length - 1;
            this.images[this.currentImg].classList.add('active');
        } else {
            this.currentImg -= 1;
            this.images[this.currentImg].classList.add('active');
        }
    }

    showNextSlide() {
        this.images[this.currentImg].classList.remove('active');
        if(this.currentImg >= this.images.length - 1) {
            this.currentImg = 0;
            this.images[0].classList.add('active');
        } else {
            this.currentImg += 1;
            this.images[this.currentImg].classList.add('active');
        }
    }

}

const images = document.querySelectorAll('#slider-fade .images img');
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

new SliderFade(images, prevBtn, nextBtn);
