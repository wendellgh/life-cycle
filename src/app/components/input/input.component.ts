import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/item';

import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemQueVaiSerEditado!: Item;

  editanto = false;
  textoBtn = 'Salvar Item';
  valorItem!: string;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void { }
  
  editarItem(){
    this.listaService.editarItemDaLista(this.itemQueVaiSerEditado, this.valorItem);
    this.limparCampo();
    this.editanto = false;
    this.textoBtn = 'Salvar Item';
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['itemQueVaiSerEditado'].firstChange){
      this.editanto = true;
      this.textoBtn = 'Editar Item';
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }

  adicionarItem(){
    this.listaService.adicionarItemLista(this.valorItem);
    this.limparCampo();
  }

  limparCampo(){
    this.valorItem ='';
  }

}
