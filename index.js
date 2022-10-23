function redirect(url) {
    window.location = url;
}

function calcularIMC() {
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    let imc = Number(peso)/Number(altura)**2;
    let res = document.querySelector("#res01");
    
    if(imc<20.7) {
        res.innerHTML = `Resultado: ${imc.toFixed(2)} - Abaixo do peso.`;
    } else if (imc>=20.7 && imc <26.4) {
        res.innerHTML = `Resultado: ${imc.toFixed(2)} - Peso ideal.`;
    } else if (imc>=26.5 && imc<27.8) {
        res.innerHTML = `Resultado: ${imc.toFixed(2)} - Pouco acima do peso.`;
    } else if (imc>=27.8 && imc<31.1) {
        res.innerHTML = `Resultado: ${imc.toFixed(2)} - Acima do peso.`;
    } else {
        res.innerHTML = `Resultado: ${imc.toFixed(2)} - Obesidade.`;
    }
}

function contaRestaurante() {
    let conta = document.querySelector("#total");
    let res = document.querySelector("#res02");
    let gorgeta = (Number(conta.value)/100)*10;
    let total = Number(conta.value) + gorgeta;
    
    res.innerHTML = `Resultado: ${total.toFixed(2)}R$.`;
}

function parouimpar() {
    let num = document.querySelector("#num");
    if((num.value)%2 == 0){
        document.querySelector("#res03").innerHTML = "Resultado: PAR.";
    } else {
        document.querySelector("#res03").innerHTML = "Resultado: ÍMPAR.";
    }
}

function calcularPeso() {
    let h = document.querySelector("#altura");
    let sexo = document.getElementsByName("sexo");
    let res = document.querySelector("#res04");

    if(sexo[0].checked == true) {
        let pesoH = Number(72.7*h.value - 58);
        res.innerHTML = `Peso Ideal: ${pesoH.toFixed(2)}kg.`;
    } else {
        let pesoM = Number(62.1*h.value - 44.7);
        res.innerHTML = `Peso Ideal: ${pesoM.toFixed(2)}kg.`;
    }
}

function calcularMedia() {
    let nota1 = document.querySelector("#nota1").value;
    let nota2 = document.querySelector("#nota2").value;
    let nota3 = document.querySelector("#nota3").value;
    let res = document.querySelector("#res06");
    let media = (Number(nota1) + Number(nota2) + Number(nota3))/3;
    res.innerHTML = `Média: ${media.toFixed(1)}`;   
}

function calcularHorasVividas() {
    let ano = document.querySelector("#anos");
    let mes = document.querySelector("#meses");
    let dia = document.querySelector("#dia").value;
    if(ano.value > 2022){
        document.querySelector("#res07").innerHTML = `[ERRO!] Verifique os dados.`;
    } else {
        let anosVividos = 2022 - ano.value;
        let horasVividas = (anosVividos * 8760) + (mes.value * 730) + dia*24;
        document.querySelector("#res07").innerHTML = `Resultado: ${horasVividas} horas vividas.`;
    }
}

function horasViagem() {
    let duração = document.querySelector("#duração");
    let horas = duração.value * 24;
    document.querySelector("#res08").innerHTML = `Resultado: ${horas} horas de viagem.`;
}

function multiplicarVetor() {
    let multi = document.getElementById('multiplicador').value;
    let input = document.getElementsByName('numeros');
    let array = [];

    for(let i = 0; i < input.length; i++) {
        let element = input[i].value;
        element = element * multi;
        array.push(element);
        document.getElementById("res09").innerHTML += array[i] + " ";
    }
}

function areaRetangulo() {
    let base = document.querySelector("#b");
    let altura = document.querySelector("#h");
    let bh = base.value * altura.value;
    document.querySelector("#res10").innerHTML = `Resultado: ${bh}m².`
}

function idadeDias() {
    let idade = document.querySelector('#idade');
    let diasVividas = idade.value * 365;
    document.querySelector("#res11").innerHTML = `Resultado: Aproximadamente ${diasVividas} dias vividos.`;
}

function calcularPercentual() {
    let habitantes = document.querySelector("#habitantes").value;
    let brancos = document.querySelector("#brancos").value;
    let nulos = document.querySelector("#nulos").value;
    let válidos = document.querySelector("#validos").value;

    let pBrancos = (habitantes*brancos)/100;
    let pNulos = (habitantes*nulos)/100;
    let pValidos = (habitantes*válidos)/100;

    document.querySelector("#res12").innerHTML = `Válidos: ${pValidos}, Brancos: ${pBrancos}, Nulos: ${pNulos}.`;
}

function calcularSalario() {
    let salario = document.querySelector("#salario").value;
    let percentual = document.querySelector("#reajuste").value;
    let reajuste = (salario*percentual)/100;
    let newSalary = Number(salario) + Number(reajuste);
    document.querySelector("#res13").innerHTML = `Novo Salário: ${newSalary.toFixed(2)} R$.`;
}

function custoFinal() {
    let custoInicial = document.querySelector("#custo").value;
    let distribuidor = (custoInicial*28)/100;
    let impostos = (custoInicial*45)/100;
    let total = (Number(custoInicial) + Number(distribuidor) + Number(impostos));
    document.querySelector("#res14").innerHTML = `Custo Final: ${total.toFixed(2)}R$.`;
}

function salarioVendedor() {
    let vendidos = document.querySelector("#vendidos").value;
    let vendasTotal = document.querySelector("#vendasTotal").value;
    let salarioFixo = document.querySelector("#salarioFixo").value;
    let comissao = document.querySelector("#comissao").value;
    let cincoPer = (vendasTotal*5)/100;
    let valorCarro = (vendasTotal/vendidos);
    let comissaoF = ((valorCarro*comissao)/100)*vendidos;
    let salarioFinal = Number(cincoPer) + Number(salarioFixo) + Number(comissaoF);
    document.querySelector("#res15").innerHTML = `Salário Final: ${salarioFinal.toFixed(2)}R$.`;
}