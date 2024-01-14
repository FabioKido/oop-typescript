import { writeFileSync } from 'fs'
import { join } from 'path'
import { fakerPT_BR } from '@faker-js/faker'

interface Usuario {
    nome: string
    email: string
    telefone: string
    dataNascimento: Date
}

function criarUsuariosAleatorios(): Usuario {
    return {
        nome: fakerPT_BR.internet.userName(),
        email: fakerPT_BR.internet.email(),
        telefone: fakerPT_BR.phone.number(),
        dataNascimento: fakerPT_BR.date.birthdate()
    };
}

const contatos: Usuario[] = fakerPT_BR.helpers.multiple(criarUsuariosAleatorios, {
    count: 100,
});
let linhasCSV = ''

contatos.forEach(c => {
    linhasCSV += `${c.nome}, ${c.email}, ${c.telefone}, ${c.dataNascimento}` + '\n'
})

const caminhoDiretorioArquivos = join(__dirname, 'data')
const strJson = JSON.stringify(contatos)
const caminhoArquivoJSON = join(caminhoDiretorioArquivos, 'contatos.json')
writeFileSync(caminhoArquivoJSON, strJson)

const caminhoArquivoCSV = join(caminhoDiretorioArquivos, 'contatos.csv')
writeFileSync(caminhoArquivoCSV, linhasCSV)

console.log('Arquivos gravados!')