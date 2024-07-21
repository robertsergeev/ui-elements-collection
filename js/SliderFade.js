class SliderFade{
    constructor(images, prevBtn, nextBtn) {
        this.images = [...images];
        this.prevBtn = prevBtn;
        this.nextBtn = nextBtn;
        this.currentImg = 0;
        this.init();
    }

    init() {
        this.prevBtn.addEventListener('click', this.showPrevSlide.bind(this));
        this.nextBtn.addEventListener('click', this.showNextSlide.bind(this));

        let startX;
        this.images.forEach(img => {
            img.addEventListener('touchstart', (event) => {
                startX = event.touches[0].clientX;
            });

            img.addEventListener('touchmove', (event) => {
                if (!startX) return;
                const endX = event.touches[0].clientX;
                const diffX = startX - endX;
            
                if (diffX > 0) {
                    this.showNextSlide();
                    startX = null;
                } else if (diffX < 0) {
                    this.showPrevSlide();
                    startX = null;
                }
            });
        });

        setInterval(this.showNextSlide.bind(this), 5000);
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
