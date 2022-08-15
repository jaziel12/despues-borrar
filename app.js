const lista = document.getElementById('lista')
const fragment= document.createDocumentFragment();
const liTemplate = document.getElementById('liTemplate')

const arrayPaises = ["Perú", "México", "Colombia"];

const clickPaises = (e) => console.log('Me diste click', e.target);

arrayPaises.forEach((pais) =>{
    const clone = liTemplate.content.cloneNode(true);
    clone.getElementById('text-primary').textContent = pais;

    clone.addEventListener('click', clickPaises);


    fragment.appendChild(clone)


})
lista.appendChild(fragment)
/* const clone = liTemplate.content.cloneNode(true)

clone.getElementById('text-primary').textContent = 'Agregué por template'


lista.appendChild(clone) */








/* const inputColor = document.getElementById("inputColor");
const btnVisaulizar = document.getElementById("btnVisaulizar");
const parrafoExa = document.getElementById("parrafoExa");
const cardColor = document.getElementById("cardColor");

console.log(inputColor.value)
btnVisaulizar.addEventListener("click", () =>{
    console.log('me diste click')
    console.log(inputColor.value)
    parrafoExa.textContent = inputColor.value
    cardColor.style.backgroundColor = inputColor.value
})
 */










/* const tituloA = document.getElementById("ttWeb")
tituloA.style.color = "green"
tituloA.style.background = "yellow"

const boton = document.getElementById("btn")
boton.addEventListener("click", ()=>{
    tituloA.textContent = "¿Qué onda loco?"
    tituloA.style.color = "black"
    tituloA.style.background = "blue"
}) */