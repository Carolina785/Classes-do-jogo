# Classe Herói — Sistema de Ataques por Tipo

Desafio de lógica de programação desenvolvido durante o bootcamp, com o objetivo de praticar **Programação Orientada a Objetos (POO)** em JavaScript, utilizando classes, construtores e métodos.

## 📋 Descrição

O programa define uma classe `Heroi`, capaz de instanciar diferentes heróis com nome, idade e tipo. Cada herói possui um método `atacar()`, que determina a forma de ataque com base no seu tipo.

## ⚙️ Como funciona

O tipo de ataque é determinado de acordo com o `tipo` do herói:

| Tipo        | Ataque           |
|-------------|------------------|
| mago        | magia            |
| guerreiro   | espada           |
| monge       | artes marciais   |
| ninja       | shuriken         |

## 💻 Código

\`\`\`javascript
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
        console.log(\`O ${this.tipo} atacou usando ${ataque}\`)
    }
}

// Criação de um herói do tipo guerreiro
let Heroi1 = new Heroi ("Arcadius", 70, "mago")
let Heroi2 = new Heroi ("Arthur", 50, "guerreiro")
let Heroi3 = new Heroi ("Valen", 90, "monge")
let Heroi4 = new Heroi ("Takeda", 45, "ninja")


// Chama o método atacar
Heroi1.atacar()
Heroi2.atacar()
Heroi3.atacar()
Heroi4.atacar()
\`\`\`

## ▶️ Como executar

1. Certifique-se de ter o [Node.js](https://nodejs.org) instalado.
2. Salve o código em um arquivo chamado `index.js`.
3. No terminal, execute:
   \`\`\`bash
   node index.js
   \`\`\`

## 📤 Saída esperada

\`\`\`
O mago atacou usando magia
O guerreiro atacou usando espada
O monge atacou usando artes marciais
O ninja atacou usando shuriken
\`\`\`

## 🧠 Conceitos praticados

- Programação Orientada a Objetos (POO)
- Declaração de classes (`class`)
- Método construtor (`constructor`)
- Propriedades de instância (`this`)
- Métodos de instância
- Estrutura condicional `if-else`
- Instanciação de objetos (`new`)
- Template literals para formatação de strings

## 📌 Observação

Este projeto foi desenvolvido em JavaScript como parte de um bootcamp de lógica de programação da DIO.
