class Warrior {
    attacks = ['stroke', 'hit', 'cut', 'punch']
    constructor(name, power) {
        this.name = name;
        this.power = power;

    }
    showStatistics() {
        console.log('Name: ' + this.name, 'Power: ' + this.power);

    }
    attack() {
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            const attackPower = Math.floor(Math.random() * 100);
            const attackChoice = Math.floor(Math.random() * this.attacks.length - 1) + 1;
            // console.log(`${this.attacks[attackChoice]} o mocy ${attackPower}`);
            return attackPower;
        });
    }
    hurt(attackPoints) {
        this.power -= attackPoints;
    }
}
const time = new Date
console.log(time.getFullYear());