const listaDeComidas = [
    {
        "nome": "Founde Feliz",
        "descricao": "É instantâneo! Se comer, ficará muito feliz!",
        "preco": 10,
        "imagem": 'http://www.lovethispic.com/uploaded_images/84571-Strawberry-Chocolate-Fondue.jpg'

    },

    {
        "nome": "Esquenta Coração",
        "descricao": "Esquente sua vida com essa bebida saborosa!",
        "preco": 6,
        "imagem": 'https://www.giassi.com.br/upload/notice_image/2014/07/Destaque-Chocolate-quente-com-canela.jpg'
    },

    {
        "nome": "Chocolate Mágico",
        "descricao": "Ganhe poderes mágicos ao saborear esse bolo delícia!",
        "preco": 8,
        "imagem": 'https://img.itdg.com.br/images/recipes/000/007/480/284957/284957_original.jpg'
    },

    {
        "nome": "Marshmallow das Nuvens",
        "descricao": "Se sinta nas nuvens depois de uma bebida quente com deliciosos marshmallows!",
        "preco": 6,
        "imagem": 'https://image.freepik.com/fotos-gratis/chocolate-quente-com-receita-de-marshmallows_53876-18258.jpg'
    },

    {
        "nome": "Cookie Poderoso",
        "descricao": "Você vai receber poderes cósmicos e fenomenais!",
        "preco": 12,
        "imagem": 'https://www.thebakingchocolatess.com/wp-content/uploads/2015/06/perfect-cookies.jpg'
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
            <p><strong>Descrição:</strong> ${comida.descricao}</p> 
            <p><strong>Preço:</strong> R$${comida.preco},00</p>
        </div>
    `
    cardapio.appendChild(itemDoCardapio);
})