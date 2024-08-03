// console.log('hello')
//
// let titleDiv = document.getElementById('title')
//
// console.log('before: ', titleDiv.innerText)
//
// let message = 'Goodbye my lover!'
//
// titleDiv.innerText = message
// console.log('after: ', titleDiv.innerText)
//
// titleDiv.innerHTML = `<p>${message}</p>`
//
// titleDiv.style.color = 'blue'

/////////////////////////////    GREEN RED YELLOW ///////////////////////////////

// let redDiv = document.getElementById('red')
// let yellowDiv = document.getElementById('yellow')
// let greenDiv = document.getElementById('green')
//
// redDiv.onclick = () => console.log('clicked red')
// yellowDiv.onclick = () => console.log('clicked yellow')
// greenDiv.onclick = () => {
//     console.log('clicked green')
//     console.log('another one ')
// }

const squares = document.querySelectorAll('.colorButton')

// console.log(squares[0].value)
// console.log(squares[1].value)

// squares.forEach(square => console.log(square.value))

// squares.forEach(square => {
//     square.onclick = () => console.log(square.value)
// })

let timesClicked = {'red': 0, 'yellow': 0, 'green': 0}
squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] ++
        square.innerText = timesClicked[square.value]
    }
})

const clearScores = () => {
    timesClicked.red = 0
    timesClicked.yellow = 0
    timesClicked.green = 0
    squares.forEach(square => {
        square.innerText = ''
    })
}

const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => {
    clearScores()
}








































































