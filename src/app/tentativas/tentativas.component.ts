import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  public coracaoCheio: string = '/assets/coracao_cheio.png'
  public coracaoVazio: string = '/assets/coracao_cheio.png'

  @Input() public tentativas: number

  public coracoes: Coracao [] = [
    new Coracao (true), new Coracao (true), new Coracao (true)
  ]

  constructor() { 
    
  }

  ngOnChanges () {

    if (this.coracoes.length !== this.tentativas) {

      let indice = this.coracoes.length - this.tentativas

      this.coracoes[indice - 1].cheio = false
    }

    console.log("Tentativas recebidas do painel:",this.tentativas)
  }

  ngOnInit(): void {

  }

}
