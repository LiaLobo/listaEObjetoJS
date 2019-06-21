const listaDeComidas = [
    {
        "nome": "Cupcake Feliz",
        "descricao": "É instantâneo! Se comer, ficará muito feliz!",
        "preco": 8,
        "imagem": 'https://truffle-assets.imgix.net/8dd6f17a-funfetti-freakshake-cupcakes-sc.jpg'

    },

    {
        "nome": "Bolo Colorido",
        "descricao": "Colora sua vida com esse bolo saboroso",
        "preco": 11,
        "imagem": 'https://i.pinimg.com/originals/18/26/40/182640c6d5ae282de50a24f0e0493205.jpg'
    },

    {
        "nome": "Chocolate Mágico",
        "descricao": "Ganhe poderes mágicos ao saborear essa delícia!",
        "preco": 8,
        "imagem": 'https://www.davidlebovitz.com/wp-content/uploads/2018/03/Chocolate-pot-de-creme-recipe-7-640x427.jpg'
    },

    {
        "nome": "Marshmallow das Nuvens",
        "descricao": "Se sinta nas nuvens depois de comer um delicioso marshmallow!",
        "preco": 5,
        "imagem": 'https://assets.xtechcommerce.com/uploads/summernote/full/6b2bb53ff8b0d29e1c07507434099c38.jpg'
    },

    {
        "nome": "Torta Poderosa",
        "descricao": "Você vai receber poderes cósmicos e fenomenais!",
        "preco": 11,
        "imagem": 'https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2017/08/Mini-Apple-Pies.jpg?resize=1360%2C2040&ssl=1'
    }
];

let cardapio = document.querySelector("#cardapio");

listaDeComidas.forEach(comida => {
    let itemDoCardapio = document.createElement("div");
    itemDoCardapio.setAttribute("class", "itemCardapio");
    itemDoCardapio.innerHTML = `
        <div>
            <img src="${comida.imagem}" width="180px" alt="">
        </div>
        <div>
            <p><strong>Nome: </strong>${comida.nome}</p>
            <p><strong>Descricão:</strong> ${comida.descricao}</p> 
            <p><strong>Preco:</strong> R$${comida.preco},00</p>
        </div>
    `
    cardapio.appendChild(itemDoCardapio);
})