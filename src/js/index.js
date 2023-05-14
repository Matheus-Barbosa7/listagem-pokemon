// <--- Comentario
/* ABCD */ // < ---- comentario de multi linhas

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    //Verificar se ja estar no modo escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    //Usado para alternar entre dois estados.
    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        //body.classList.remove("modo-escuro");

        //Trocando icone de lua para sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {
        //body.classList.add("modo-escuro");

        //Mudar ícone de sol para a lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});