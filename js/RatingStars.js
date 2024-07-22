// TODO: create an updateStars method to reduce repetition of the same code

class RatingStars{
    constructor(stars) {
        this.stars = [...stars];
        this.selectedStar = 0;
        this.init();
    }

    init(){
        const parent = this.stars[0].parentElement
        parent.addEventListener('click', this.fill.bind(this));
        parent.addEventListener('mouseover', this.preview.bind(this));
        parent.addEventListener('mouseleave', this.unfill.bind(this));
    }

    fill(event) {
        if(event.target.closest('.icon')) {
            this.selectedStar = event.target.closest('.icon').dataset.order;
        
            for(let i = 0; i < this.stars.length; i++) {
                if(i < this.selectedStar) {
                    this.stars[i].classList.add('filled');
                } else {
                    this.stars[i].classList.remove('filled');
                }
            }
        }
    }

    preview(event) {
        if(event.target.classList.contains('icon')) {
            let order = event.target.dataset.order;

            for(let i = 0; i < this.stars.length; i++) {
                if(i < order) {
                    this.stars[i].classList.add('filled');
                } else {
                    this.stars[i].classList.remove('filled');
                }
            }
        }
    }

    unfill() {
        for(let i = 0; i < this.stars.length; i++) {
            if(i < this.selectedStar) {
                this.stars[i].classList.add('filled');
            } else {
                this.stars[i].classList.remove('filled');
            }
        }
    }
}

const stars = document.querySelectorAll('.rating-stars .stars svg');
new RatingStars(stars)

