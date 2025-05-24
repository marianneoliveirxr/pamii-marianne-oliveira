function produto(produto: string, preco: number, disponivel: boolean) : string {
    return `Produto: ${produto} - Preço: ${preco} - Disponível: ${disponivel ? 'Sim':'Não'}!`;
}
console.log(produto('Mouse', 59.90, true ));