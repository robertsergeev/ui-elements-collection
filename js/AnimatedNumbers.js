class AnimatedNumbers {
    constructor(nums) {
        this.nums = nums;
        this.animated = false;

        if (this.nums) {
            this.init();
        }
    }

    init() {
        document.addEventListener("scroll", this.elemInView.bind(this));
    }

    animate(num) {
        let start = 0;
        let target = num.dataset.target;
        let increment = target / 50;

        function update() {
            if (start < target) {
                start += increment;
                num.textContent = Math.round(start);
                requestAnimationFrame(update);
            } else {
                num.textContent = Math.round(target);
            }
        }

        update();
    }

    elemInView() {
        const rect = this.nums.getBoundingClientRect();
        if (
            rect.top >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight)
        ) {
            this.startAnimation();
            this.animated = true;
        }
    }

    startAnimation() {
        if (!this.animated) {
            let arr = [...this.nums.children];
            for (const num of arr) {
                this.animate(num);
            }
        }
    }
}

const nums = document.querySelector("#numbers");
new AnimatedNumbers(nums);
