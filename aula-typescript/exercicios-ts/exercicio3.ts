interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number; 
}

function exibirLivro(livro: Livro): void {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
}

exibirLivro({ titulo: 'Baladas de Amor ao Vento', autor: 'Paulina Chiziane', anoPublicacao: 1998});