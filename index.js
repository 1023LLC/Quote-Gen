const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens while you are busy making other plans.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long you do not stop.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Wagwan bredda",
    "It is what it is",
    "In the end it's not the years in your life that count. It's the life in your years.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things.",
    "Pilipili usioila yakuwaishia nini?",
    "Asiyefunzwa na mamaye hufunzwa na ulimwengu.",
    "Mtoto akililia wembe, mpe!"

]


const usedIndexes = new Set()
const quoteElement = document.getElementById('quote')


function generateQuote(){
    if (usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }

    while (true){
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        quoteElement.innerHTML = quotes[randomIdx] 
        usedIndexes.add(randomIdx)
        break
    }
}