/*import { ContaBancaria } from './model/entity/ContaBancaria'

const conta1 = new ContaBancaria('01234-5', '1234-5')
let saldoAtual: number = conta1.consultar()
console.log('Saldo inicial: ' + saldoAtual)

let deuCerto: boolean = conta1.depositar(70)
if(deuCerto) {
    saldoAtual = conta1.consultar()
    console.log('Saldo atual: ' + saldoAtual)
} else {
    console.log('Não foi possível realizar o deposito!')
}

deuCerto = conta1.sacar(50)
if(deuCerto) {
    saldoAtual = conta1.consultar()
    console.log('Saldo atual: ' + saldoAtual)
} else {
    console.log('Não foi possível realizar o saque!')
}

console.log(conta1)*/

//import { ContatoJsonDAO } from './model/dao/ContatoJsonDAO'
import { ContatoCsvDAO } from './model/dao/ContatoCsvDAO'

const contatoDAO = new ContatoCsvDAO()
console.log(contatoDAO.recuperarContatos())