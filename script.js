// alert("Please use mobile view. Im bad at making responsive layout. THANKS:)))")

const mainBox = document.querySelector("#main-box")
const lidBox = document.querySelector(".box-lid")
const divEmoji = document.querySelectorAll("div.emoji")

const h2 = document.createElement("h2")
mainBox.appendChild(h2)

function throwLid() {
    lidBox.style.top = "40%"
    lidBox.style.animation = "fade 500ms linear forwards"
}
function lowerMainBox() {
    mainBox.style.top = "90%"
}
function doMagic() {
    h2.innerHTML = "Happy Birthday <span style='color: #44B6A6;'>P<i class='fa-solid fa-heart'></i></span>"
    h2.style.animation = "popUp 1000ms ease-in-out forwards"
}
function fireworks() {
    let count = setInterval(() => {
        mainBox.style.animation = "bounce 3000ms ease-in-out 1500ms infinite"
        const emojis = ["🥳", "💜", "🩷", "🎉", "🎈", "🎊", "🎁"]
        let docWidth = window.innerWidth - 35
        let docHeight = window.innerHeight - 72

        const createEmoji = document.createElement("div")
        createEmoji.classList.add("emoji")
        let randNum = Math.floor(Math.random() * emojis.length)
        createEmoji.innerText = `${emojis[randNum]}`
        createEmoji.style.top = `${Math.floor(Math.random() * docHeight)}px`
        createEmoji.style.left = `${Math.floor(Math.random() * docWidth)}px`
        createEmoji.style.transform = `scale(${(Math.random() * 2) + 1})`
        document.body.appendChild(createEmoji)
        createEmoji.style.animation = "fadeDrop 1500ms linear forwards"
    }, 10);
    setTimeout(() => {
        clearInterval(count)
    }, 2000)
}


function lidVanish() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(throwLid())
        }, 1);
    })
}
function dropMainBox() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(lowerMainBox())
        }, 2)
    })
}
function speakNow() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(doMagic())
        }, 200);
    })
}
function throwEmojis() {
    return new Promise((resolve, reject) => {
        resolve(fireworks())
    })
}


async function doAllShit() {
    try {
        const first = await lidVanish()
        const second = await lowerMainBox()
        const third = await speakNow()
        const fourth = await throwEmojis()
    } catch (error) {
        alert(error)
    }
}