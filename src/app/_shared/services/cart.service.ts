import { Injectable, WritableSignal, signal } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: WritableSignal<Product[]> = signal<Product[]>([]);
  constructor() {}

  add(product: Product) {
    this.cartList.mutate((cart) => cart.push(product));
  }

  remove(id: string) {
    let index = this.cartList().findIndex((product) => product.id == id);

    if (index != -1) {
      this.cartList.mutate((products) => products.splice(index, 1));
    }
  }
}
