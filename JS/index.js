class Carro {
    constructor (nome,ano, cor){
        this.ano = ano;
        this.nome = nome;
        this.cor = cor;
    }
}

const volvo= new Carro('Volvo', 2021, 'blue')//criando um novo objeto apartir da class Carro
const ferrari = new Carro('Ferrari', 2022, 'red')

console.log(volvo, ferrari)

class Casa {
    constructor(cidade, cor, preco) {
        this.cidade = cidade
        this.cor= cor
        this.preco = preco
    }

    alterarPreco(novoPreco) {
    return  this.preco = `R$ ${novoPreco} `
    } 

}

const casa1 = new Casa('São Paulo', 'white', 'R$ 50,000')

console.log(casa1)

casa1.alterarPreco('100,000')

console.log(casa1)

    const classCheck =  false
    classCheck && console.log('ola');
    
    form.addEventListener('click', e => {
        e.preventDefault();
        const target = e.target;
        const classCheck =  e.target.classList.contains('theme')
        classCheck&& selectItem(buttonsNumberOfPlayers,target);
        
    })