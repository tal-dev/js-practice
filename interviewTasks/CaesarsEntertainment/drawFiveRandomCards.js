// Please write a function that will draw 5 random cards from a Standard 52-card deck.
// *The cards will not be put back in deck after they are drawn.
// *Standard 52-card deck has 4 suits: clubs (♣), diamonds (♦), hearts (♥) and spades (♠)
// *Each suit has 13 ranks: 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'

const drawFiveRandomCards = () => {
    const suits = ["♣", "♦", "♥", "♠"];
    const ranks = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    const deck = [];
  
    for (let suit = 0; suit < suits.length; suit++) {
      for (let rank = 0; rank < ranks.length; rank++) {
        deck.push(suits[suit] + ranks[rank]);
      }
    }
  
    const drawnCards = [];
    for (let card = 0; card < 5; card++) {
      const randomNumber = Math.floor(Math.random() * deck.length);
      drawnCards.push(deck[randomNumber]);
      deck.splice(randomNumber, 1);
    }
    return drawnCards;
  };
  
  // --------------------------------------------------------------------
  
  const drawRandomCards = () => {
    const suits = ["♣", "♦", "♥", "♠"];
    const ranks = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    const deck = [];
  
    for (let suit = 0; suit < suits.length; suit++) {
      for (let rank = 0; rank < ranks.length; rank++) {
        deck.push(suits[suit] + ranks[rank]);
      }
    }
  
    for (let i = 0; i < deck.length; i++) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      let temp = deck[i];
      deck[i] = deck[randomIndex];
      deck[randomIndex] = temp;
    }
  
    const drawnCards = deck.splice(0, 5);
    return drawnCards;
  };
  
drawFiveRandomCards();