//anonymous objects = objects without a name
//                    not directly referenced
//                    Less syntax, no need for unique names

class Card{
    constructor(value, suit){
        this.value = value
        this.suit = suit
    }
}

new Card("A", "Hearts")
new Card("A", "Spades")
new Card("A", "Diamonds")
new Card("A", "Clubs")

new Card("2", "Hearts")
new Card("2", "Spades")
new Card("2", "Diamonds")
new Card("2", "Clubs")

// let card1 = new Card("A", "Hearts")
// let card2 = new Card("A", "Spades")
// let card3 = new Card("A", "Diamonds")
// let card4 = new Card("A", "Clubs")

// let card5 = new Card("2", "Hearts")
// let card6 = new Card("2", "Spades")
// let card7 = new Card("2", "Diamonds")
// let card8 = new Card("2", "Clubs")

let cards = [new Card("A", "Hearts"),
             new Card("A", "Spades"),
             new Card("A", "Diamonds"),
             new Card("A", "Clubs"),
             new Card("2", "Hearts"),
             new Card("2", "Spades"),
             new Card("2", "Diamonds"),
             new Card("2", "Clubs")
            ]

// console.log(card1.value + card1.suit)
// console.log(cards[0].value + cards[0].suit)

cards.forEach(card => console.log(`${card.value} ${card.suit}`))