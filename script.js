function funcaoMelanie() {
    let salario, necessidades, economias, lazer;

    salario = parseFloat(prompt("Digite o valor do salário mensal: "));

    necessidades = salario * 0.50;
    economias = salario * 0.30;
    lazer = salario * 0.20;

    alert("O valor utilizado em necessidades será: R$ " + necessidades);
    alert("O valor utilizado em economias será: R$ " + economias);
    alert("O valor utilizado em lazer será: R$ " + lazer);
}

function CalcularInvestimentoKennedy() {
    let valor, resultado;

    valor = parseFloat(prompt("Qual o valor que você pode investir por 12 meses?"));

    valor *= 12;
    alert("O valor total investido foi de: " + valor);

    resultado = valor * 1.3;
    alert("\nO valor que você faturou foi de: " + resultado);
}

function CotacaoHigor() {
    let valor, reais, cotacao;

    valor = parseFloat(prompt("Digite o valor: R$"));
    
    reais = 0.20;
    
    cotacao = valor * reais;

    alert("Convertido para dólar é de: U$ " + cotacao.toFixed(2));
}

function VitorcalcularEmprestimo() {
    let valorEmprestimo = parseFloat(prompt("Digite o valor do empréstimo: "));
    let taxaJurosAnual = 10;
    let prazoAnos = parseInt(prompt("Digite o prazo em anos: "));

    let taxaJurosMensal = taxaJurosAnual / 100 / 12;
    let numPagamentos = prazoAnos * 12;
    let pagamentoMensal = (valorEmprestimo * taxaJurosMensal) / (1 - Math.pow((1 + taxaJurosMensal), -numPagamentos));
    let valorTotalPago = pagamentoMensal * numPagamentos;

    let pagamentoMensalStr = pagamentoMensal.toFixed(2).substring(0, 10);
    let valorTotalPagoStr = valorTotalPago.toFixed(2).substring(0, 10);

    alert("\nValor da parcela mensal: R$ " + pagamentoMensalStr);
    alert("Valor total a ser pago: R$ " + valorTotalPagoStr);
}
