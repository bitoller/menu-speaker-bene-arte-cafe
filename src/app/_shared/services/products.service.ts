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
        name: 'Mousse da Cazé Mousses',
        image: './assets/menu/caze-mousse.jpg',
        description: 'Mousse de maracujá com ganache de chocolate meio amargo.',
        price: 12,
        audio: './assets/menu/audio-caze-mousse.mp3',
      },
      {
        id: uuid(),
        name: 'Borbulhante comercializado pela HoneyWorks',
        image: './assets/menu/honeyworks.jpg',
        description:
          'Borbulhante de hidromel da abelha Jataí feito pela empresa MBEE, 750ml.',
        price: 150,
        audio: './assets/menu/audio-honeyworks.mp3',
      },
      {
        id: uuid(),
        name: 'Pudim da Magic Pastry',
        image: './assets/menu/pudim.jpg',
        description: 'Pudim de leite condensado com calda de caramelo.',
        price: 12,
        audio: './assets/menu/audio-pudim.mp3',
      },
      {
        id: uuid(),
        name: 'Mousse Passion da Magic Pastry',
        image: './assets/menu/mousse.jpg',
        description: 'Mousse de maracujá com chocolate.',
        price: 15,
        audio: './assets/menu/audio-mousse.mp3',
      },
      {
        id: uuid(),
        name: 'Torta de Amêndoas da Magic Pastry',
        image: './assets/menu/torta.jpg',
        description: 'Massa sablé com creme frangipane e amêndoas.',
        price: 15,
        audio: './assets/menu/audio-torta.mp3',
      },
      {
        id: uuid(),
        name: 'Sanduíche com Molho da Pira no BBQ',
        image: './assets/menu/bbq.jpg',
        description:
          'Sanduíche de pernil com Molho BBQ agridoce e defumado feito com melado de cana. Acompanha batatas fritas.',
        price: 20,
        audio: './assets/menu/audio-bbq.mp3',
      },
      {
        id: uuid(),
        name: 'Sanduíche do Pita do Novinha',
        image: './assets/menu/pita.jpg',
        description:
          'Sanduíche de pão pita recheado com frango grelhado, legumes frescos e molho refrescante de iogurte com pepino, conhecido como tzatziki.',
        price: 14,
        audio: './assets/menu/audio-pita.mp3',
      },
      {
        id: uuid(),
        name: "Drink Basil Smash da Zest's",
        image: './assets/menu/basil.jpg',
        description:
          'Gin com limão, xarope de açúcar e manjericão. Harmoniza com escalope de vieira com espuma de cajú.',
        price: 45,
        audio: './assets/menu/audio-basil.mp3',
      },
      {
        id: uuid(),
        name: "Drink Manhattan da Zest's",
        image: './assets/menu/manhattan.jpg',
        description:
          'Bitter, vermute rosso, bourbon e cereja. Harmoniza com Ópera de caramelo salgado com Whisky.',
        price: 39,
        audio: './assets/menu/audio-manhattan.mp3',
      },
    ] as Product[];
  }
}
