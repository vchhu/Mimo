class Pet {
    constructor(id) {
        this.id = id;
        this.hunger = 100;
        this.displayElement = document.getElementById(`pet${id}`);
        this.hungerElement = document.getElementById(`hunger${id}`);
        this.messageElement = document.getElementById(`message${id}`);
    }

    increaseHunger() {
        this.hunger -= 10;
        if (this.hunger < 0) this.hunger = 0;
        this.hungerElement.innerHTML = this.hunger;
        if (this.hunger === 0) {
            this.messageElement.innerHTML = "Pet ran away";
            this.displayElement.classList.add("ranAway");
        }
    }

    feed(amount) {
        this.hunger += amount;
        if (this.hunger > 100) this.hunger = 100;
        this.hungerElement.innerHTML = this.hunger;
    }
}

function selectPet(num) {
    //toggles selection class
}

function feedPet(amount) {
    //feeds selected pet
}