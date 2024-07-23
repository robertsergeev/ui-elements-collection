class RatingStars{
    constructor(starsContainer, stars) {
        if(starsContainer && stars) {
            this.starsContainer = starsContainer;
            this.stars = [...stars];
            this.selectedStar = 0;
            this.init();
        }

    }

    init(){
        this.starsContainer.addEventListener('click', this.fill.bind(this));
        this.starsContainer.addEventListener('mouseover', this.preview.bind(this));
        this.starsContainer.addEventListener('mouseleave', this.unfill.bind(this));
    }

    fill(event) {
        if(event.target.closest('.icon')) {
            this.selectedStar = +event.target.closest('.icon').dataset.order;
        
            this.updateStars(this.selectedStar)
        }
    }

    preview(event) {
        if(event.target.classList.contains('icon')) {
            let order = +event.target.dataset.order;

            this.updateStars(order)

        }
    }

    unfill() {
        this.updateStars(this.selectedStar)
    }

    updateStars(breakpoint) {
        for(let i = 0; i < this.stars.length; i++) {
            if(i < breakpoint) {
                this.stars[i].classList.add('filled');
            } else {
                this.stars[i].classList.remove('filled');
            }
        }
    }
}

const stars = document.querySelectorAll('.rating-stars .stars svg');
const starsContainer = document.querySelector('.rating-stars .stars');
new RatingStars(starsContainer, stars);
