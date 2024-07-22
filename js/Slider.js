class Slider{
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
}