// Extra Ejercicio POO 2 - kata Mayas y aztecas

class Warrior {
  constructor(life, power) {
    this.life = life;
    this.power = power;
  }

  attack() {
    return this.power;
  }

  defend(damage) {
    this.life -= damage;
    console.log(`Vida restante: ${this.life}`);
  }
}

class Maya extends Warrior {
  constructor(life, power) {
    super(life, power);
  }

  drinkColaCao() {
    this.power += 10;
  }
}

class Aztec extends Warrior {
  constructor(life, power) {
    super(life, power);
  }

  drinkNesquik() {
    this.life += 10;
  }
}

const maya = new Maya(100, 20);
const aztec = new Aztec(100, 20);

console.log("Azteca bebe Nesquik:");
aztec.drinkNesquik();

console.log("Maya bebe Cola Cao:");
maya.drinkColaCao();

console.log("Maya ataca a Azteca:");
aztec.defend(maya.attack());

console.log("Azteca ataca a Maya:");
maya.defend(aztec.attack());
