const comidas = [
    {
        nome: "Arroz",
        categoria: "Grãos",
        quantidade: 20,
        preco: 25.90
    },
    {
        nome: "Feijão",
        categoria: "Grãos",
        quantidade: 15,
        preco: 8.50
    },
    {
        nome: "Macarrão",
        categoria: "Massas",
        quantidade: 30,
        preco: 6.99
    },
    {
        nome: "Carne bovina",
        categoria: "Carnes",
        quantidade: 10,
        preco: 39.90
    },
    {
        nome: "Frango",
        categoria: "Carnes",
        quantidade: 18,
        preco: 18.90
    },
    {
        nome: "Leite",
        categoria: "Laticínios",
        quantidade: 25,
        preco: 5.49
    },
    {
        nome: "Queijo",
        categoria: "Laticínios",
        quantidade: 12,
        preco: 32.90
    },
    {
        nome: "Maçã",
        categoria: "Frutas",
        quantidade: 40,
        preco: 4.99
    }
];

const corpoTabela = document.getElementById("corpoTabela");

for (let comida of comidas) {
    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${comida.nome}</td>
        <td>${comida.categoria}</td>
        <td>${comida.quantidade}</td>
        <td class="preco">${comida.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}</td>
    `;

    corpoTabela.appendChild(linha);
}