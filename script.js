const colors = ["green","red","rgba(133,122,200)","#f15025","#ccc","violet","blue","transparent "]
const btn = document.querySelector("#btn")
const color = document.querySelector(".color")

btn.addEventListener("click",function(){
    const randomNumber = numAleatorio()                               // atribuindo a funcao abaixo a uma variavel
    console.log(randomNumber)

    const numeroAleatorio = 2
    document.body.style.backgroundColor = colors[randomNumber]       /* pega um item do array colors e joga a cor no body */
    color.textContent = colors[randomNumber]                         /* Informa ao usuario qual cor é essa, usando a msm logica */

    

})

/* Criar uma funcao para retornar numero aleatorios */

 function numAleatorio(){
    return Math.floor(Math.random()*colors.length)  //o floor "arredonda" para baixo, o round para o mais proximo, como n pode passar do numero de itens do array cores, uso o floor
}
