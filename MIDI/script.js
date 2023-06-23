// document.querySelector(".tecla_pom").onclick = () => {
//     document.querySelector("#som_tecla_pom").play()
// }

// document.querySelector(".tecla_clap").onclick = () => {
//     document.querySelector("#som_tecla_clap").play()
// }

// document.querySelector(".tecla_tim").onclick = () => {
//     document.querySelector("#som_tecla_tim").play()
// }

// document.querySelector(".tecla_puff").onclick = () => {
//     document.querySelector("#som_tecla_puff").play()
// }

// document.querySelector(".tecla_splash").onclick = () => {
//     document.querySelector("#som_tecla_splash").play()
// }

// document.querySelector(".tecla_toim").onclick = () => {
//     document.querySelector("#som_tecla_psh").play()
// }

// document.querySelector(".tecla_psh").onclick = () => {
//     document.querySelector("#som_tecla_psh").play()
// }

// document.querySelector(".tecla_tic").onclick = () => {
//     document.querySelector("#som_tecla_tic").play()
// }

// document.querySelector(".tecla_tom").onclick = () => {
//     document.querySelector("#som_tecla_tom").play()
// }

function playSound(idAudio){
    document.querySelector(idAudio).play()
}

var keyList = document.querySelectorAll(".tecla")

var count = 0

while (count < keyList.length){

    var key = keyList[count]
    var audios = key.classList[1]
    // Template Strings
    const idAudio = `#som_${audios}` 

    console.log(idAudio)



    key.onclick = () => { 
        playSound(idAudio)
    }


    count++

}