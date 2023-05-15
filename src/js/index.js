const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTema = document.querySelector(".imagem-botao") 

botaoAlterarTema.addEventListener("click", () => {

const modoEscuroOn = body.classList.contains("modo-escuro");

if(modoEscuroOn){
    body.classList.remove("modo-escuro");

    imagemBotaoTema.setAttribute("src", "./src/imagens/sun.png")}
else{

    body.classList.add("modo-escuro")

    imagemBotaoTema.setAttribute("src", "./src/imagens/moon.png")}
});