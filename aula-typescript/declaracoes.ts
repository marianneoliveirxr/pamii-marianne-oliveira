//Declarações de variáveis 
let nome: string = 'Marianne';
let idade: number = 16;
let estaAtivo: boolean = true;

//Arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ['Amanda', 'Joao', 'Mari'];
let misto: (string | number)[] = ['Amanda', 25, 'Mari', 20];
let misto2: Array<string | number> = ['Amanda', 25, 'Mari', 30];

//Tuplas
let pessoa: [string, number] = ['Maria', 30];

//Union Types
let id: number | string = 123;
id: 'ABCD123';

//INTERFACES --> sÃO USADAS PARA DEFINIR ESTRUTURAS DE OBJETOS
interface Usuario {
    nome: string;
    idade: number;
    email?: string; //Opcional
}

//Utilizar elas fica assim:
let novo_usuario: Usuario = {
    nome: 'Julia',
    idade: 18
}