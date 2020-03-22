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
    showWarriorStatistics() {
        if (this.power < 0) {
            console.log('dead');
            this.power = 0;

        } else {
            console.log('Name: ' + this.name, 'Power: ' + this.power);
        }
    }
    attack() {
        const damage = Math.round(this.attackPower * this.attacks[this.attacksChoice])
        return damage;

    }
    offense(attackPoints) {
        this.power -= attackPoints;
        console.log('damage ' + attackPoints);
    }
}

class WarriorWizard extends Warrior {
    wizardry = [1, 0.8, 3, 2]
    wizardryChoice = Math.floor(Math.random() * this.attacks.length - 1) + 1;
    constructor(name, power, magic) {
        super(name, power);
        this.magic = magic;
    }

    showWizardStatistics() {
        super.showWarriorStatistics();
        console.log(`Magic: ${this.magic}`);
    }

    spell() {
        const magicAttack = super.attack();
        const damage = Math.floor(magicAttack * this.wizardry[this.wizardryChoice]);
        console.log(`I 'm casting a spell: ${damage}`);
        return damage;
    }
}


const sorcerer = new WarriorWizard('Alpha', 85, 200);
sorcerer.showWizardStatistics()