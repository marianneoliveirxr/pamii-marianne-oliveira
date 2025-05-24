let cidades: string[] = ['São Paulo', 'Campinas', 'São Caetano', 'Barueri', 'Sumaré'];

function listarCidades(cidades: string[]): void {
    cidades.forEach(cidade => console.log(cidade));
}

listarCidades([ 'São Paulo', 'Campinas', 'São Caetano', 'Barueri', 'Sumaré']);