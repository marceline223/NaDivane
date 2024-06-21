import {Component, OnInit} from '@angular/core';
import {ItemEntity} from "../item-card/ItemEntity";

@Component({
  selector: 'item-list',
  templateUrl: './ItemList.html',
})
export class ItemList implements OnInit{
  title = 'ItemList';

  products: ItemEntity[] | undefined;

  ngOnInit() {
    this.products = [
      {
        id: 0,
        name: 'Продукт 1',
        description: 'Описание продукта 1',
        price: 17.5,
      },
      {
        id: 1,
        name: 'Продукт 2',
        description: 'Описание продукта 2',
        price: 230.99,
      },
      {
        id: 2,
        name: 'Продукт 3',
        description: 'Описание продукта 3',
        price: 11,
      },
      {
        id: 3,
        name: 'Продукт 4',
        description: 'Описание продукта 4',
        price: 500,
      },
    ]
  }
}
