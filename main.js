// const nomeProduto = "Ps4";
// const marca = "Playstation";
// const preco = 2000;
// const imagem ="conjuntos.png";

import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtroscatalogo";
import { atualizarPrecoCarrinho, 
    inicializarCarrinho, 
    renderizarProdutosCarrinho, } from "./src/menuCarrinho";



inicializarCarrinho();
renderizarCatalogo();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();