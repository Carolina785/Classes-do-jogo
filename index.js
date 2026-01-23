// Classe que representa um herói genérico
class Heroi{
    // Método construtor: recebe nome, idade e tipo do herói
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    // Método responsável pelo ataque do herói
    atacar(){
        let ataque // Variável que irá armazenar o tipo de ataque

        // Estrutura de decisão para definir o ataque conforme o tipo do herói
        if(this.tipo === "mago"){
            ataque = "magia"
        } else if (this.tipo === "guerreiro"){
            ataque = "espada"
        } else if (this.tipo === "monge"){
            ataque = "artes marciais"
        } else if (this.tipo === "ninja"){
            ataque = "shuriken"
        }

        // Exibe a mensagem final
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

// Criação de um herói do tipo guerreiro
let Heroi1 = new Heroi ("Arcadius", 70, "mago")
let Heroi2 = new Heroi ("Arthur", 50, "guerreiro")
let heroi3 = new Heroi ("Valen", 90, "monge")
let Heroi4 = new Heroi ("Takeda", 45, "ninja")


// Chama o método atacar
Heroi1.atacar()
Heroi2.atacar()
heroi3.atacar()
Heroi4.atacar()