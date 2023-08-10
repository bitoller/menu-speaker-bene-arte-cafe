import { Injectable, WritableSignal, signal } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: WritableSignal<Product[]> = signal<Product[]>([]);

  constructor() {}

  add(product: Product) {
    let item = this.cartList().find((item) => product.id == item.id);

    if (item) {
      item.amount ? (item.amount += 1) : 1;
      this.update(item);
    } else {
      product.amount = 1;
      this.cartList.mutate((cart) => cart.push(product));
    }
  }

  remove(id: string) {
    let index = this.cartList().findIndex((product) => product.id == id);

    if (index != -1) {
      let cartListItem = this.cartList()[index];

      if (cartListItem.amount! > 1) {
        cartListItem.amount! -= 1;
        this.update(cartListItem);
      } else {
        this.cartList.mutate((products) => products.splice(index, 1));
      }
    }
  }

  update(product: Product) {
    this.cartList.update((products) => {
      return products.map((listItem) => {
        let a = listItem.id == product.id ? product : listItem;
        return a;
      });
    });
  }
}
