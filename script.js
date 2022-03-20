let random = function() {
 return Math.floor(Math.random() * 100)
}
let pokeImg = document.querySelector(".poke-img")
let forms = document.querySelectorAll(".poke-form")
let inputOne = document.querySelector("#one")
let inputTwo = document.querySelector("#two")
let inputThree = document.querySelector("#three")
let inputFour = document.querySelector("#four")
let inputFive = document.querySelector("#five")
let inputSix = document.querySelector("#six")
let backgroundAudio = document.querySelector(".bkg-audio")
let finalMsg = document.querySelector(".final-msg")

// backgroundAudio.play()




fetch(`https://pokeapi.co/api/v2/pokemon/${random()}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    pokeImg.src = data.sprites.other["official-artwork"].front_default
    pokeImg.style.filter = "blur(15px)"
    let dash = "-"
    if (!(data.name).includes(dash)) {
      forms[0].addEventListener('submit', (e) => {
        e.preventDefault()
        let word = (e.target.elements[0].value)
        if (word.toLowerCase() === data.name) {
          inputOne.style.pointerEvents = "none"
          inputOne.style.color = "green"
          pokeImg.style.filter = "blur(0)"
          finalMsg.innerText = "Ash!?"
          finalMsg.style.paddingLeft = "10px"
          return console.log("You win!")
        }
        else {
          inputOne.style.pointerEvents = "none"
          inputOne.style.color = "red"
          pokeImg.style.filter = "blur(12px)"
          inputTwo.focus()
          inputTwo.style.pointerEvents = "auto"
        }
      })
      forms[1].addEventListener('submit', (e) => {
        e.preventDefault()
        let word = e.target.elements[0].value
        if (word.toLowerCase() === data.name) {
          inputTwo.style.pointerEvents = "none"
          inputTwo.style.color = "green"
          pokeImg.style.filter = "blur(0)"
          finalMsg.innerText = "Master!"
          finalMsg.style.paddingLeft = "10px"
          return console.log("You win!")
        }
        else {
          inputTwo.style.pointerEvents = "none"
          inputTwo.style.color = "red"
          pokeImg.style.filter = "blur(8px)"
          inputThree.focus()
          inputThree.style.pointerEvents = "auto"
        }
      })
      forms[2].addEventListener('submit', (e) => {
        e.preventDefault()
        let word = e.target.elements[0].value
        if (word.toLowerCase() === data.name) {
          inputThree.style.pointerEvents = "none"
          inputThree.style.color = "green"
          pokeImg.style.filter = "blur(0)"
          finalMsg.innerText = "Ace!"
          return console.log("You win!")
        }
        else {
          inputThree.style.pointerEvents = "none"
          inputThree.style.color = "red"
          pokeImg.style.filter = "blur(5px)"
          inputFour.focus()
          inputFour.style.pointerEvents = "auto"
        }
      })
      forms[3].addEventListener('submit', (e) => {
        e.preventDefault()
        let word = e.target.elements[0].value
        if (word.toLowerCase() === data.name) {
          inputFour.style.pointerEvents = "none"
          inputFour.style.color = "green"
          pokeImg.style.filter = "blur(0)"
          finalMsg.innerText = "Nice!"
          return console.log("You win!")
        }
        else {
          inputFour.style.pointerEvents = "none"
          inputFour.style.color = "red"
          pokeImg.style.filter = "blur(2px)"
          inputFive.focus()
          inputFive.style.pointerEvents = "auto"
        }
      })
      forms[4].addEventListener('submit', (e) => {
        e.preventDefault()
        let word = e.target.elements[0].value
        if (word.toLowerCase() === data.name) {
          inputFive.style.pointerEvents = "none"
          inputFive.style.color = "green"
          pokeImg.style.filter = "blur(0)"
          finalMsg.innerText = "Good Job!"
          return console.log("You win!")
        }
        else {
          inputFive.style.pointerEvents = "none"
          inputFive.style.color = "red"
          pokeImg.style.filter = "blur(2px)"
          inputSix.focus()
          inputSix.style.pointerEvents = "auto"
        }
      })
      forms[5].addEventListener('submit', (e) => {
        e.preventDefault()
        let word = e.target.elements[0].value
        if (word.toLowerCase() === data.name) {
          inputSix.style.pointerEvents = "none"
          inputSix.style.color = "green"
          pokeImg.style.filter = "blur(0)"
          finalMsg.innerText = "Noob"
          return console.log("You win!")
        }
        else {
          let h1 = document.createElement("h1")
          h1.classList.add("answer")
          h1.innerText = `${(data.name).toUpperCase()}`
          inputOne.before(h1)
          inputSix.style.pointerEvents = "none"
          inputSix.style.color = "red"
          finalMsg.style.color = "red"
          finalMsg.innerText = "You Lose!"
          pokeImg.style.filter = "blur(0)"
        }
      })
    }
    else {
      document.location.reload()
    }
    }
    
)

