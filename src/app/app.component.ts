import { Component, Input, OnInit } from '@angular/core';

import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Item } from './interfaces/item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-lista-de-compras';
  listaCompra!:Array<Item>;
  itemParaSerEditado!:Item;

  constructor(private listaDeCompraService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaCompra = this.listaDeCompraService.getListaDeCompra();

  }

  editarItem(item: Item){
    this.itemParaSerEditado = item;
  }

}
