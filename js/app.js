

const quotes = [
  {
    quote: 'Be yourself; everyone else is already taken."',
    author: 'Oscar Wilde'
  },
  {
    quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`, 
    author: 'Albert Einstein'
  },
  {
    quote:'You only live once, but if you do it right, once is enough."',
    author: 'Mae West'
  },
  {
    quote: `In three words I can sum up everything I've learned about life: it goes on."`,
    author: 'Robert Frost'
  },
  {
    quote: 'Always forgive your enemies; nothing annoys them so much.”',
    author: 'Oscar Wilde'
  },
  {
    quote: `I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."`,
    author: 'Maya Angelou'
  }
];

const random = () => Math.floor(Math.random() * quotes.length);

let btn = document.getElementById('generate-btn');
const q = document.getElementById('quote');
const a = document.getElementById('author');

btn.addEventListener("click", () => {
  const num = random()
  q.textContent = quotes[num].quote;
  a.textContent = quotes[num].author;
});
