import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = []; // Forma simplificada de declaracao de Array em Typescript. 
    // private negociacoes: Array<Negociacao> = []; Forma mais comum de declaração de Array.

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): ReadonlyArray<Negociacao> { // Forma mais comum de declaração de ReadOnlyArray.
    // lista(): readonly Negociacao[] { Forma simplificada de declaração de ReadOnlyArray.   
        return this.negociacoes;
    }

}
