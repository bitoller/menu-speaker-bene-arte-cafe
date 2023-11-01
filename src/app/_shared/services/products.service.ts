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
        name: 'Cazé Mousses',
        image: './assets/menu/caze-mousse.jpeg',
        description: 'Mousse de maracujá com ganache de chocolate meio amargo.',
        price: 12,
        audio: './assets/menu/audio-caze-mousse.mp3',
      },
      {
        id: uuid(),
        name: 'Honeyworks',
        image: './assets/menu/honeyworks.jpeg',
        description:
          'Borbulhante de hidromel da abelha Jataí feito pela empresa MBEE, 750ml.',
        price: 150,
        audio: './assets/menu/audio-honeyworks.mp3',
      },
      {
        id: uuid(),
        name: 'Pudim',
        image: './assets/menu/pudim.jpeg',
        description: 'Magic Pastry. Pudim de leite condensado.',
        price: 12,
        audio: './assets/menu/audio-pudim.mp3',
      },
      {
        id: uuid(),
        name: 'Mousse de Maracujá',
        image: './assets/menu/mousse.jpeg',
        description: 'Mousse de maracujá com chocolate.',
        price: 15,
        audio: './assets/menu/audio-mousse.mp3',
      },
      {
        id: uuid(),
        name: 'Torta',
        image: './assets/menu/torta.jpeg',
        description: 'Torta de amêndoas.',
        price: 15,
        audio: './assets/menu/audio-torta.mp3',
      },
      {
        id: uuid(),
        name: 'Pira no BBQ',
        image: './assets/menu/sanduiche.jpeg',
        description:
          'Sanduíche de pernil com Molho BBQ agridoce e defumado feito com melado de cana. Acompanha batatas fritas.',
        price: 20,
        audio: './assets/menu/audio-bbq.mp3',
      },
      {
        id: uuid(),
        name: 'Pita do Novinha',
        image: './assets/menu/tzatziki.jpeg',
        description:
          'Sanduíche de pão pita recheado com frango grelhado, legumes frescos e molho refrescante de iogurte com pepino, conhecido como tzatziki.',
        price: 14,
        audio: './assets/menu/audio-pita.mp3',
      },
      {
        id: uuid(),
        name: 'Drink Basil Smash',
        image: './assets/menu/basil-smash.jpeg',
        description:
          'Drink Basil Smash: gin com limão, xarope de açúcar e manjericão. Harmoniza com escalope de vieira e espuma de cajú.',
        price: 45,
        audio: './assets/menu/audio-basil.mp3',
      },
      {
        id: uuid(),
        name: 'Drink Manhattan',
        image: './assets/menu/manhattan.jpeg',
        description:
          'Drink Manhattan: bitter, vermute rosso, bourbon e cereja. Harmoniza com Ópera de caramelo salgado e Whisky.',
        price: 39,
        audio: './assets/menu/audio-manhattan.mp3',
      },
    ] as Product[];
  }
}
