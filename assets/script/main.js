let comChoices = ["rock", "paper", "scissors"]
let resultW_L = document.getElementById("win-loss")
let humanScore = document.getElementById("human-score")
let comScore = document.getElementById("com-score")
let score1 = 0
let score2 = 0
const humanPick = document.getElementById("humanPick")
const comPick = document.getElementById("comPick")
let win_lose = ''
const history = document.querySelector(".history")

let humanPickStart = document.querySelector("#humanPick img")
let comPickStart = document.querySelector("#comPick img")

let choicesBtn = document.querySelectorAll(".choicesBtn")

function choose(rps) {
    let player1Img = {
        "rock":"./assets/image/left-rock.png",
        "paper":"./assets/image/left-paper.png",
        "scissors":"./assets/image/left-choosed-s.png",
    }
    let player2Img = {
        "rock":"./assets/image/right-rock.png",
        "paper":"./assets/image/choosed-paper.png",
        "scissors":"./assets/image/rightchoose-s.png",
    }
    humanPickStart.classList.add("start1")
    comPickStart.classList.add("start2")
   
    humanPick.innerHTML = `
    <img class="start1" src="${player1Img['rock']}">
    `
    comPick.innerHTML = `
    <img class="start2" src="${player2Img['rock']}">
    `
    for (let i = 0 ; i < 3 ; i ++) {
        choicesBtn[i].disabled = true
    }
    resultW_L.style.display = "none"
    console.log('asd')
    setTimeout(() => {
    let i = Math.floor(Math.random() * 3)
    if(rps === comChoices[i]) {
        console.log('Tie')
        resultW_L.innerHTML = "Its a Tie"
        win_lose = "TIE"
    }
    else if(rps === "rock" && comChoices[i] === "scissors" || 
            rps === "scissors" && comChoices[i] === "paper" || 
            rps === "paper" && comChoices[i] === "rock") {
        resultW_L.innerHTML = "YOU WIN"
        score1 ++
        humanScore.innerHTML = score1
        win_lose = "WIN"
        resultW_L.style.color = "green"
    } else {
        resultW_L.innerHTML = "YOU LOSE"
        resultW_L.style.color = "#F31559"
        score2 ++
        comScore.innerHTML = score2
        win_lose = "LOSE"
    }
    humanPick.innerHTML = `
    <img src="${player1Img[rps]}">
    `
    comPick.innerHTML = `
    <img src="${player2Img[comChoices[i]]}">
    `
    
    // let div = `<div> ${rps} ${resultW_L.textContent} ${comChoices[i]}</div>`
    let div = document.createElement("div")
    // div.innerHTML =
    history.insertAdjacentHTML("afterbegin", `<div class="history-div"> <p>${rps}</p>  <p class=${win_lose === "WIN"? 'win'  : win_lose === "LOSE" ? 'lose' : 'tie'}>${win_lose} </p> <p> ${comChoices[i]} </p> <button onclick="removeEl(this)">Remove</button></div>`)
    for (let i = 0 ; i < 3 ; i ++) {
        choicesBtn[i].disabled = false
    }
    resultW_L.style.display = "block"
    },1500)

}


function removeEl(el) {
    el.parentNode.remove()
}

