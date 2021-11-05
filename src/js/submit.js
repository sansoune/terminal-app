console.log('hello') 
const {exec} = require('child_process')


// const container = document.getElementById('terminal-container')

const popopapa = (input, container) => {
    console.log('hello 💩')
    console.log(input)
    exec(input, (err, stdout, stderr) => {
        container.innerHTML += stdout
    })
}
