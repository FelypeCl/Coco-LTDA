var tipoDoCoco: string;
var tipoDoCartao: string;

document.getElementById("cocos")!.style.display = "none";
document.getElementById("comprar")!.style.display = "none";
document.getElementById("pagamento")!.style.display = "none";
document.getElementById("imgCartao")!.style.display = "none";
document.getElementById("textoFinal")!.style.display = "none";

themas()
function themas():void{
    setTimeout(() => {
        themeSwitch()
        themas();
    }, 100);
}

document.getElementById("escolha")!.addEventListener("click", () => {
    removerTextosPrincipais();
});
document.getElementById("comprar")!.addEventListener("click", () => {
    if(getTipoCoco() == undefined){
        alert("Você precisa escolher um tipo de coco antes de ir pro checkout.");
        return;
    }
    campoDePagamento();
});

document.getElementById("finalizarPedido")!.addEventListener("click", () => {
    document.getElementById("pagamento")!.style.display = "none";
    document.getElementById("imgCartao")!.style.display = "none";
    document.getElementById("textoFinal")!.style.display = "block";
});

function removerTextosPrincipais():void {
    const $title = document.getElementById("title");
    const $subtitle = document.getElementById("subtitle");
    const $botaoEscolha = document.getElementById("escolha");
    const $botaoCompra = document.getElementById("comprar");
    $botaoCompra!.style.display = "block";
    $botaoEscolha!.style.display = "none";
    $title!.style.display = "none";
    $subtitle!.style.display = "none";
    document.getElementById("cocos")!.style.display = "block";
    
    escolherCoco();
}

function escolherCoco():void{
    const $cocoMain = (document.getElementById("cocoMain") as HTMLImageElement);
    document.getElementById("cocoRalado")!.addEventListener("click", () => {
        $cocoMain.src = "imgs/Coco Seco.png";
        document.getElementById("valor")!.innerHTML = "&nbsp;1,99";
        setTipoCoco("Seco");
    });
    document.getElementById("cocoVerde")!.addEventListener("click", () => {
        $cocoMain.src = "imgs/Coco Main.png";
        document.getElementById("valor")!.innerHTML = "0,99";
        setTipoCoco("Verde");
    });
}

function campoDePagamento():void {
    document.getElementById("cocoVerde")!.style.display="none";
    document.getElementById("cocoRalado")!.style.display="none";
    document.getElementById("comprar")!.style.display="none";
    document.getElementById("pagamento")!.style.display = "block";
    document.getElementById("imgCartao")!.style.display = "block";

    const $debito = document.getElementById("debito");
    const $credito = document.getElementById("credito");

    $debito!.addEventListener("click", () => {
        setTipoCartao("Débito");
        $debito!.style.backgroundColor = "#688334";
        $debito!.style.color = "white";
        $credito!.style.backgroundColor = "white";
        $credito!.style.color = "#717171";
    })
    $credito!.addEventListener("click", () => {
        setTipoCartao("Crédito");
        $credito!.style.backgroundColor = "#688334";
        $credito!.style.color = "white";
        $debito!.style.backgroundColor = "white";
        $debito!.style.color = "#717171";
    })

    atualizarDadosNoCartao()
    function atualizarDadosNoCartao():void{
        verificarTodosOsCampos()
        carregarDados()
        setTimeout(atualizarDadosNoCartao, 100);
    }
}

const $numeroCartao = (document.getElementById("numeroCartao") as HTMLInputElement);
const $nomeCartao = (document.getElementById("nomeCartao") as HTMLInputElement);
const $cvvCartao = (document.getElementById("cvvCartao") as HTMLInputElement);
const $dataCartao = (document.getElementById("dataCartao") as HTMLInputElement);

function carregarDados():void{
    document.getElementById("cartaoNumero")!.innerHTML = $numeroCartao.value;
    document.getElementById("cartaoNome")!.innerHTML = ($nomeCartao.value).toUpperCase();
    document.getElementById("cartaoCvv")!.innerHTML = $cvvCartao.value;
    document.getElementById("cartaoVencimento")!.innerHTML = $dataCartao.value;
}

function verificarTodosOsCampos():void {
    if ((document.getElementById("nome") as HTMLInputElement).value.length != 0 &&
    (document.getElementById("cep") as HTMLInputElement).value.length != 0 &&
    (document.getElementById("endereco") as HTMLInputElement).value.length != 0 &&
    (document.getElementById("cpf") as HTMLInputElement).value.length != 0 &&
    (document.getElementById("nomeCartao") as HTMLInputElement).value.length != 0 &&
    (document.getElementById("numeroCartao") as HTMLInputElement).value.length != 0 &&
    (document.getElementById("cvvCartao") as HTMLInputElement).value.length != 0 &&
    (document.getElementById("dataCartao") as HTMLInputElement).value.length != 0 ){
        document.getElementById("finalizarPedido")!.style.visibility="visible";
    } else {
        document.getElementById("finalizarPedido")!.style.visibility="hidden";
    }
}

function themeSwitch():void {
    const $switch = (document.getElementById("tema") as HTMLInputElement);
    const $background = document.body;
    const $textoPrincipal = document.getElementById("title");
    const $textoSecundario = document.getElementById("subtitle");
    const $preco = document.getElementById("preco");
    const $textoFinal = document.getElementById("textoFinal");
    const $cocoVerde = document.getElementById("cocoVerde");
    const $cocoRalado = document.getElementById("cocoRalado"); 

    if($switch.checked){
        $background.style.backgroundImage = 'url(../imgs/background_dark.png)';
        $textoPrincipal!.style.color = "white";
        $textoSecundario!.style.color = "#7c9927";
        $preco!.style.backgroundColor = "#2a2a2a";
        $textoFinal!.style.color = "white";
        $cocoVerde!.style.backgroundColor = "#2a2a2a";
        $cocoRalado!.style.backgroundColor = "#2a2a2a";
    } else {
        $background.style.backgroundImage = 'url(../imgs/background.png)';
        $textoPrincipal!.style.color = "#384257";
        $textoSecundario!.style.color = "#384257";
        $preco!.style.backgroundColor = "white";
        $textoFinal!.style.color = "black";
        $cocoVerde!.style.backgroundColor = "white";
        $cocoRalado!.style.backgroundColor = "white";
    }
}

function getTipoCoco():string{
    return tipoDoCoco;
}

function setTipoCoco(coco:string):void{
    tipoDoCoco = coco;
}

function getTipoCartao():string{
    return tipoDoCartao;
}

function setTipoCartao(cartao:string):void{
    tipoDoCartao = cartao;
}
