function boasVindas()
{

    alert("Bem-vindo à Mia & Late Moda Pet!");

    document.getElementById("conteudo").style.display = "block";
    document.getElementById("btnEntrar").style.display = "none";
    
}

function trocarCor()
{
    if(document.body.style.background)
    {

        document.body.style.background =
        "linear-gradient(to right, #ffe600, #eb7406)";

    }
    else
    {

        document.body.style.background =
        "linear-gradient(to right, #00aeff, #8406eb)";

    }

}

function mostrarProdutos()
{

    document.getElementById("produtos").style.display="block";

}

function promocao(produto, preco)
{

    alert(
        "🎉 Promoção!\n\n" +
        produto +
        "\nPor apenas R$ " +
        preco.toFixed(2)
    );

    let resposta = confirm("Deseja comprar este produto?");

    if(resposta)
    {
        alert("Compra realizada!");
    }
    else
    {
        alert("Compra cancelada.");
    }

}