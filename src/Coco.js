"use strict";
var tipoDoCoco;
document.getElementById("cocos").style.display = "none";
document.getElementById("comprar").style.display = "none";
document.getElementById("escolha").addEventListener("click", () => {
    removerTextosPrincipais();
});
document.getElementById("comprar").addEventListener("click", () => {
    if (getTipoCoco() == undefined) {
        alert("Você precisa escolher um tipo de coco antes de ir pro checkout.");
    }
});
function removerTextosPrincipais() {
    const $title = document.getElementById("title");
    const $subtitle = document.getElementById("subtitle");
    const $botaoEscolha = document.getElementById("escolha");
    const $botaoCompra = document.getElementById("comprar");
    $botaoCompra.style.display = "block";
    $botaoEscolha.style.display = "none";
    $title.style.display = "none";
    $subtitle.style.display = "none";
    document.getElementById("cocos").style.display = "block";
    escolherCoco();
}
function escolherCoco() {
    const $cocoMain = document.getElementById("cocoMain");
    document.getElementById("cocoRalado").addEventListener("click", () => {
        $cocoMain.src = "imgs/Coco Seco.png";
        document.getElementById("valor").innerHTML = "&nbsp;1,99";
        setTipoCoco("Seco");
    });
    document.getElementById("cocoVerde").addEventListener("click", () => {
        $cocoMain.src = "imgs/Coco Main.png";
        document.getElementById("valor").innerHTML = "0,99";
        setTipoCoco("Verde");
    });
}
function getTipoCoco() {
    return tipoDoCoco;
}
function setTipoCoco(coco) {
    tipoDoCoco = coco;
}
