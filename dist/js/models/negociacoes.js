export class Negociacoes {
    constructor() {
        this.negociacoes = []; // Forma simplificada de declaracao de Array em Typescript. 
    }
    // private negociacoes: Array<Negociacao> = []; Forma mais comum de declaração de Array.
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        // lista(): readonly Negociacao[] { Forma simplificada de declaração de ReadOnlyArray.   
        return this.negociacoes;
    }
}
