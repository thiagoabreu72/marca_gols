import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.scss']
})
export class BotoesComponent {

  @Input() campos: string[] = [];

  constructor() { }

  limparCampos(valor: string[]) {

  }

}
