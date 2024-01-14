import { Contato } from "./Contato"

describe('Testa o modelo de Contato', () => {
    
    test('Deve criar um novo objeto de contato com os atributos válidos', () => {
        const contato = new Contato(
            'Fábio Kido',
            '+55 (50) 0463-7771', 
            'test@test.com', 
            new Date('1994-01-28'))
        expect(contato.nome).toBe('Fábio Kido')
        expect(contato.telefone).toBe('+55 (50) 0463-7771')
        expect(contato.email).toBe('test@test.com')
        expect(contato.dataNascimento).toStrictEqual(new Date('1994-01-28'))
    })
})