export class Player {
  constructor({ category = "Guerreiro" }) {
    const categories = {
      Guerreiro: 'Espada',
      Mago: 'Magia',
      Monge: 'Artes Marciais',
      Ninja: 'Shuriken'
    }

    this.name = "Jogador"
    this.age = 18
    this.category = category
    this.power = categories[category]
  }
}
