import { Contato } from '../entity/Contato'
import { ContatoDAO } from './ContatoDAO'
import parse from 'csv-parse/lib/sync'

export class ContatoCsvDAO extends ContatoDAO {

    constructor() {
        super('contatos.csv')
    }

    recuperarContatos(): Contato[] {
        const listaObj: any[] = parse(this.conteudoStr)
        const contatos = listaObj.map(obj => new Contato(
            obj[0],
            obj[1],
            obj[2],
            new Date(obj[3])
        ))

        return contatos
    }
}