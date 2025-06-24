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
            this.displayElement.onclick = null;
        }
    }

    feed(amount) {
        this.hunger += amount;
        if (this.hunger > 100) this.hunger = 100;
        this.hungerElement.innerHTML = this.hunger;
    }
}

const cat = new Pet(1);
const dog = new Pet(2);

let selectedPet = null;
const catElement = document.getElementById("pet1");
const dogElement = document.getElementById("pet2");

function selectPet(id) {
    catElement.classList.remove("selected");
    dogElement.classList.remove("selected");

    selectedPet = id;
    if (id === 1) catElement.classList.add("selected");
    else dogElement.classList.add("selected");
}

function feedPet(amount) {
    if (selectedPet === 1) cat.feed(amount);
    else dog.feed(amount);
}

setInterval(() => {
    cat.increaseHunger();
    dog.increaseHunger();
}, 5000);

selectPet(1);