const quotes = [
    {
        queto:"Life is tough, but it's tougher when you're stupid.",
        author:"John Wayne",
    },
    {
        queto:"Life is an unbroken succession of false situations.",
        author:"Thornton Wilder",
    },
    {
        queto:"Life is a long lesson in humility.",
        author:"James M. Barrie",
    },
    {
        queto:"It's not how much we give, but how much love we put into giving.",
        author:"Mother Teresa",
    },
    {
        queto:"Hope is necessary in every condition.",
        author:"Samuel Johnson",
    },
    {
        queto:"Try not to become a man of success but rather to become a man of value.",
        author:"Albert Einstein",
    },
    {
        queto:"Real love is a permanently self-enlarging experience.",
        author:"M. Scott Peck",
    },
    {
        queto:"We can draw lessons from the past, but we cannot live in it.",
        author:"Lyndon B. Johnson",
    },
    {
        queto:"The best thing about the future is that it comes one day at a time.",
        author:"Abraham Lincoln",
    },
    {
        queto:"Ability is of little account without opportunity.",
        author:"Napoleon Bonaparte"
    }
];

const quote = document.querySelector("#quoteBox span:first-child");

const author = document.querySelector("#quoteBox span:last-child"); 

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = `"${todaysQuote.queto}"`;
author.innerText = `- ${todaysQuote.author} -`;