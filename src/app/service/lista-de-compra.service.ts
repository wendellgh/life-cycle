import { Item } from 'src/app/interfaces/item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[] = [];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  criarItem(nomedoItem: string) {
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id,
      nome: nomedoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false,
    };

    return item;
  }

  adicionarItemLista(nome: string) {
    const item = this.criarItem(nome);
    this.listaDeCompra.push(item);
  }

  editarItemDaLista(itemAntigo: Item, nomeEditado: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditado,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado,
    };

    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado);
  }

  atualizarLocal() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }
}
