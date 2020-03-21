class Warrior {
    attacks = [
        0.5,
        0.8,
        2,
        0.2
    ]
    constructor(name, power) {
        this.name = name;
        this.power = power;

    }
    showStatistics() {
        if (this.power < 0) {
            console.log('dead');
            this.power = 0;

        } else {
            console.log('Name: ' + this.name, 'Power: ' + this.power);
        }
    }
    attack() {
        const attackPower = Math.floor(Math.random() * 100);
        const attackChoice = Math.floor(Math.random() * this.attacks.length - 1) + 1;

        return Math.round(attackPower * this.attacks[attackChoice]);

    }
    offense(attackPoints) {
        this.power -= attackPoints;
        console.log('damage ' + attackPoints);
        this.showStatistics();
    }
}

const player = new Warrior('Bry', 100);
const a = player.attack();
player.offense(a)