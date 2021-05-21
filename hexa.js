const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn =  document.querySelector("#btn")
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    let hexaColor = "#"
    for(var i = 0; i<6;i++){
        hexaColor += hex[numeroAleatorio()]//cada vez que anda um index ele chama um numero  aleatorio para o index atual, e faz todos serem os digitos serem aleatorios
        console.log(hexaColor)
    }
    color.textContent = hexaColor
    document.body.style.backgroundColor = hexaColor
})

function numeroAleatorio(){
    return Math.floor(Math.random()*hex.length)
}


