class Warrior {
    attacks = [
        0.5,
        0.8,
        2,
        0.2
    ];
    attackPower = Math.floor(Math.random() * 100);
    attacksChoice = Math.floor(Math.random() * this.attacks.length - 1) + 1;

    constructor(name, power) {
        this.name = name;
        this.power = power;

    }
    showBasicStatistics() {
        if (this.power < 0) {
            console.log('dead');
            this.power = 0;

        } else {
            console.log('Name: ' + this.name, 'Power: ' + this.power);
        }
    }
    attack() {
        return Math.round(this.attackPower * this.attacks[this.attacksChoice]);

    }
    offense(attackPoints) {
        this.power -= attackPoints;
        console.log('damage ' + attackPoints);
    }
}

class WarriorWizard extends Warrior {
    wizardry = [0.8, 0.4, 0.6, 0.2]
    wizardryChoice = Math.floor(Math.random() * this.attacks.length - 1) + 1;
    constructor(name, power, magic) {
        super(name, power);
        this.magic = magic;
    }

    spell() {
        console.log(`I 'm casting a spell`);
        return this.wizardry[this.wizardryChoice] * 100;

    }
}


const sorcerer = new WarriorWizard('Alpha', 85, 200);
sorcerer.spell()