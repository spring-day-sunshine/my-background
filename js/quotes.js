const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "In the end, it’s not the years in your life that count. It’s the life in your years.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up",
        author: "Thomas A. Edison",
    },
    {
        quote: "Despite the forecast, live like it’s spring.",
        author: "Lilly Pulitzer",
    },
    {
        quote: "Love asks me no questions, and gives me endless support.",
        author: "William Shakespeare",
    },
    {
        quote: "Success is going from failure to failure without a loss of enthusiasm.",
        author: "Winston",
    },
    {
        quote: "Try not to become a man of success but rather try to become a man of value.",
        author: "Albert Einstein",
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        author: "Thomas Jefferson",
    },
    {
        quote: "I never dreamed about success, I worked for it.",
        author: "Estee Lauder",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//console.log(quotes[Math.floor(Math.random() * quotes.length)]);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
