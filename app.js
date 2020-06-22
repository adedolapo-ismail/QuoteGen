var quotes = [
    "Any fool can write a code that a computer can read. Good programmers write code that human can understand.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "Java is to Javascipt what car is to carpet.",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code.",
    ]

    function getQuote() {
        var randomNumber = Math.floor(Math.random() * quotes.length);
        document.getElementById("newQuoteSection").innerHTML = quotes[randomNumber];
    }


