const carro = {
    nome: 'Automovel',
    apelido: ['auto','carro', 'possant']
}

 const carrao = {
    ...carro,
    apelido: ['lataria', 'lata velha', 'caranga' ]
 }



function automoveis (carro) {
    console.log (`eu sou um ${carro.nome} mas tambem conhecido como ${carro.apelido[0]} , ${carro.apelido[1]} ou ${carro.apelido[2]}`)
}

automoveis(carro)
automoveis(carrao)