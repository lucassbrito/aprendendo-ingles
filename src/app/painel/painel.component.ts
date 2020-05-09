import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public instrucao: string = 'Traduza esta frase: '
  public frases: Frase[] = FRASES
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0
  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter

  constructor() { 
    this.atualizaRodada()  
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificaResposta(): void {

    console.log(this.tentativas)
    
    if (this.rodadaFrase.frasePtBr == this.resposta.trim()) {

        if (this.rodada < this.frases.length) {
          this.rodada++
            
          this.atualizaRodada()

        }
        
        this.progresso = this.progresso + 100 / this.frases.length

        if (this.rodada === 4) {
          this.encerrarJogo.emit('vitoria')
        }

    } else {
        this.tentativas--

        if (this.tentativas === -1) {
          this.encerrarJogo.emit('derrota')
        }

    }
  }

  ngOnDestroy() {
    console.log("Componente painel destruído!")
  }

  public atualizaRodada(): void {
      this.rodadaFrase = this.frases[this.rodada]

      this.resposta = ''
  }
}
