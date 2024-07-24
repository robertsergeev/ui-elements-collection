class BurgerFullcreen {
    constructor(burger, menu) {
        this.burger = burger;
        this.menu = menu;
        this.init();
    }

    init() {
        this.burger.addEventListener("click", this.toggleClass.bind(this));
    }

    toggleClass(event) {
        event.preventDefault();
        this.burger.classList.toggle("active");
        this.menu.classList.toggle("menu-opened");
        document.body.classList.toggle("menu-opened");
    }
}

const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
new BurgerFullcreen(burger, menu);
