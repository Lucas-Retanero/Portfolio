const botaoMostrarProjetos = document.querySelector(".btn-mostrar-projetos");

const botaoFecharProjetos = document.querySelector(".btn-fechar-projetos");

const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

botaoMostrarProjetos.addEventListener('click', () =>{
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add("ativo");
    })

    botaoMostrarProjetos.classList.add("remover");

    botaoFecharProjetos.classList.add("ativo");

});

//botão topo

const scrollAnima = document.querySelector('[data-anima="scroll"]');

const metadeWindow = window.innerHeight * 1.9;

function animaScroll() {
    const topoItem = scrollAnima.getBoundingClientRect().top;

    const itemVisivel = topoItem - metadeWindow < 0;

    if(itemVisivel) {
        scrollAnima.classList.add('mostrar-botao');
    } else {
        scrollAnima.classList.remove('mostrar-botao');
    };

};

window.addEventListener('scroll', animaScroll)
