// ===============================
// Sistema de Avaliação de Desempenho
// Instituto Santa Rosa
// script.js
// ===============================

// Alterna entre as telas
function mostrarTela(idTela) {

    // Esconde todas as telas
    document.querySelectorAll(".tela").forEach(tela => {
        tela.style.display = "none";
    });

    // Mostra a tela selecionada
    document.getElementById(idTela).style.display = "block";

    // Remove a classe active dos menus
    document.querySelectorAll(".menu").forEach(menu => {
        menu.classList.remove("active");
    });

    // Adiciona active ao menu clicado
    event.target.classList.add("active");

}

// ===============================
// Animação das barras
// ===============================

function animarBarras(){

    const barras = document.querySelectorAll(".progresso div");

    barras.forEach(barra=>{

        const largura = barra.style.width;

        barra.style.width="0";

        setTimeout(()=>{

            barra.style.width=largura;

        },300);

    });

}

// ===============================
// Atualiza data automaticamente
// ===============================

function atualizarMes(){

    const meses=[
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];

    const hoje=new Date();

    const texto=meses[hoje.getMonth()]+" / "+hoje.getFullYear();

    const subtitulo=document.querySelector(".subtitulo");

    if(subtitulo){
        subtitulo.innerHTML=texto;
    }

}

// ===============================
// Destaque do melhor colaborador
// ===============================

function destacarMelhor(){

    const linhas=document.querySelectorAll("tbody tr");

    if(linhas.length>0){

        linhas[0].style.background="#FFF9DB";
        linhas[0].style.fontWeight="600";

    }

}

// ===============================
// Inicialização
// ===============================

window.onload=function(){

    atualizarMes();

    animarBarras();

    destacarMelhor();

    console.log("Sistema carregado com sucesso.");

}