let homeScore = 0
let awayScore = 0

function home1() {
  homeScore++
  console.log('home1')
  drawHomeScore()
}

function home3() {
  homeScore += 3
  console.log('home3')
  drawHomeScore()
}

function away1() {
  awayScore++
  console.log('away1')
  drawAwayScore()
}

function away3() {
  awayScore += 3
  console.log('away3')
  drawAwayScore()
}

function reset() {
  homeScore = 0
  awayScore = 0
  console.log('reset')
  drawAwayScore()
  drawHomeScore()
}

function drawHomeScore() {
  let displayElm = document.getElementById("homeScore")
  displayElm.innerText = homeScore.toString()

}

function drawAwayScore() {
  let displayElm = document.getElementById("awayScore")
  displayElm.innerText = awayScore.toString()
}