"use strict";
var tipoDoCoco;
var tipoDoCartao;
document.getElementById("cocos").style.display = "none";
document.getElementById("comprar").style.display = "none";
document.getElementById("pagamento").style.display = "none";
document.getElementById("imgCartao").style.display = "none";
document.getElementById("textoFinal").style.display = "none";
themas();
function themas() {
    setTimeout(() => {
        themeSwitch();
        themas();
    }, 100);
}
document.getElementById("escolha").addEventListener("click", () => {
    removerTextosPrincipais();
});
document.getElementById("comprar").addEventListener("click", () => {
    if (getTipoCoco() == undefined) {
        alert("Você precisa escolher um tipo de coco antes de ir pro checkout.");
        return;
    }
    campoDePagamento();
});
document.getElementById("finalizarPedido").addEventListener("click", () => {
    document.getElementById("pagamento").style.display = "none";
    document.getElementById("imgCartao").style.display = "none";
    document.getElementById("textoFinal").style.display = "block";
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
function campoDePagamento() {
    document.getElementById("cocoVerde").style.display = "none";
    document.getElementById("cocoRalado").style.display = "none";
    document.getElementById("comprar").style.display = "none";
    document.getElementById("pagamento").style.display = "block";
    document.getElementById("imgCartao").style.display = "block";
    const $debito = document.getElementById("debito");
    const $credito = document.getElementById("credito");
    $debito.addEventListener("click", () => {
        setTipoCartao("Débito");
        $debito.style.backgroundColor = "#688334";
        $debito.style.color = "white";
        $credito.style.backgroundColor = "white";
        $credito.style.color = "#717171";
    });
    $credito.addEventListener("click", () => {
        setTipoCartao("Crédito");
        $credito.style.backgroundColor = "#688334";
        $credito.style.color = "white";
        $debito.style.backgroundColor = "white";
        $debito.style.color = "#717171";
    });
    atualizarDadosNoCartao();
    function atualizarDadosNoCartao() {
        verificarTodosOsCampos();
        carregarDados();
        setTimeout(atualizarDadosNoCartao, 100);
    }
}
const $numeroCartao = document.getElementById("numeroCartao");
const $nomeCartao = document.getElementById("nomeCartao");
const $cvvCartao = document.getElementById("cvvCartao");
const $dataCartao = document.getElementById("dataCartao");
function carregarDados() {
    document.getElementById("cartaoNumero").innerHTML = $numeroCartao.value;
    document.getElementById("cartaoNome").innerHTML = ($nomeCartao.value).toUpperCase();
    document.getElementById("cartaoCvv").innerHTML = $cvvCartao.value;
    document.getElementById("cartaoVencimento").innerHTML = $dataCartao.value;
}
function verificarTodosOsCampos() {
    if (document.getElementById("nome").value.length != 0 &&
        document.getElementById("cep").value.length != 0 &&
        document.getElementById("endereco").value.length != 0 &&
        document.getElementById("cpf").value.length != 0 &&
        document.getElementById("nomeCartao").value.length != 0 &&
        document.getElementById("numeroCartao").value.length != 0 &&
        document.getElementById("cvvCartao").value.length != 0 &&
        document.getElementById("dataCartao").value.length != 0) {
        document.getElementById("finalizarPedido").style.visibility = "visible";
    }
    else {
        document.getElementById("finalizarPedido").style.visibility = "hidden";
    }
}
function themeSwitch() {
    const $switch = document.getElementById("tema");
    const $background = document.body;
    const $textoPrincipal = document.getElementById("title");
    const $textoSecundario = document.getElementById("subtitle");
    const $preco = document.getElementById("preco");
    const $textoFinal = document.getElementById("textoFinal");
    const $cocoVerde = document.getElementById("cocoVerde");
    const $cocoRalado = document.getElementById("cocoRalado");
    if ($switch.checked) {
        $background.style.backgroundImage = 'url(../imgs/background_dark.png)';
        $textoPrincipal.style.color = "white";
        $textoSecundario.style.color = "#7c9927";
        $preco.style.backgroundColor = "#2a2a2a";
        $textoFinal.style.color = "white";
        $cocoVerde.style.backgroundColor = "#2a2a2a";
        $cocoRalado.style.backgroundColor = "#2a2a2a";
    }
    else {
        $background.style.backgroundImage = 'url(../imgs/background.png)';
        $textoPrincipal.style.color = "#384257";
        $textoSecundario.style.color = "#384257";
        $preco.style.backgroundColor = "white";
        $textoFinal.style.color = "black";
        $cocoVerde.style.backgroundColor = "white";
        $cocoRalado.style.backgroundColor = "white";
    }
}
function getTipoCoco() {
    return tipoDoCoco;
}
function setTipoCoco(coco) {
    tipoDoCoco = coco;
}
function getTipoCartao() {
    return tipoDoCartao;
}
function setTipoCartao(cartao) {
    tipoDoCartao = cartao;
}
