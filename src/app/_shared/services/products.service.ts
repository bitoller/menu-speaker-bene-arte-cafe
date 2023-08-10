import { Injectable, WritableSignal, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: WritableSignal<Product[]> = signal<Product[]>(this.menuItems());
  constructor() {}

  menuItems() {
    return [
      {
        id: uuid(),
        name: 'Café Coado',
        image: './assets/menu/cafe.jpg',
        description:
          'Café especial do produtor Terra de Kuri passado no coador de pano.',
        price: 5,
        audio: './assets/menu/audio-cafe.mp3',
      },
      {
        id: uuid(),
        name: 'Misto Quente',
        image: './assets/menu/misto.jpg',
        description:
          'Duas deliciosas fatias da famosa receita de Pão da Benê com presunto e mussarela. Um delicioso e quentinho sanduíche.',
        price: 13,
        audio: './assets/menu/audio-misto.mp3',
      },
      {
        id: uuid(),
        name: 'Pão Benê com Manteiga na Chapa',
        image: './assets/menu/pao.jpg',
        description:
          'Duas fatias da famosa receita de pão caseiro da Benê feito com manteiga na chapa.',
        price: 7,
        audio: './assets/menu/audio-pao.mp3',
      },
      {
        id: uuid(),
        name: 'Torta de Frango Cremosa',
        image: './assets/menu/torta.jpg',
        description:
          'Fatia de torta com massa amanteigada e recheio de frango desfiado com requeijão.',
        price: 15,
        audio: './assets/menu/audio-torta.mp3',
      },
    ] as Product[];
  }
}
