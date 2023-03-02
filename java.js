function colocador (valores)
{
    document.getElementById("tela").value += valores;
}

function calculo ()
{
    var soma = document.getElementById("tela").value;
    var resposta = eval(soma);
    document.getElementById("tela").value = resposta;
}

function limpar ()
{
    document.getElementById("tela").value = "";
}