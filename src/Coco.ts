var tipoDoCoco: string;

document.getElementById("cocos")!.style.display = "none";
document.getElementById("comprar")!.style.display = "none";
document.getElementById("pagamento")!.style.display = "none";
document.getElementById("imgCartao")!.style.display = "none";

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

function getTipoCoco():string{
    return tipoDoCoco;
}

function setTipoCoco(coco:string):void{
    tipoDoCoco = coco;
}

function campoDePagamento():void {
    document.getElementById("cocoVerde")!.style.display="none";
    document.getElementById("cocoRalado")!.style.display="none";
    document.getElementById("comprar")!.style.display="none";
    document.getElementById("pagamento")!.style.display = "block";
    document.getElementById("imgCartao")!.style.display = "block";
}
