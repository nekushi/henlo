// alert("Please use mobile view. Im bad at making responsive layout. THANKS:)))")

const mainBox = document.querySelector("#main-box")
const lidBox = document.querySelector(".box-lid")

function throwLid() {
    lidBox.style.top = "40%"
    lidBox.style.animation = "fade 500ms linear forwards"
}
function lowerMainBox() {
    mainBox.style.top = "90%"
}
const p = document.createElement("p")
function doMagic() {
    p.innerText = "Hello world"
    mainBox.appendChild(p)

    p.style.animation = "fireworks 1000ms ease-in-out forwards"
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
        }, 3);
    })
}


async function doAllShit() {
    try {
        const first = await lidVanish()
        const second = await lowerMainBox()
        const third = await speakNow()
    } catch (error) {
        alert(error)
    }
}