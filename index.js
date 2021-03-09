var randomNumber1 = Math.floor((Math.random() * 6)) + 1
result1 = "images/dice"+randomNumber1+".png"
document.querySelectorAll("img")[0].setAttribute("src", result1)

var randomNumber2 = Math.floor((Math.random() * 6)) + 1
result2 = "images/dice"+randomNumber2+".png"
document.querySelectorAll("img")[1].setAttribute("src", result2)

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏴 Player 1 wins" 
}
else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a tie" 
}
else {
    document.querySelector("h1").innerHTML = "Player 2 wins 🏴"
}   