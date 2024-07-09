import {Component} from '@angular/core';
import { Item } from '../../models/item.model'

@Component({
  selector: 'item-list',
  templateUrl: './ItemList.html',
})
export class ItemList{
  title = 'ItemList';

  list: Item[] = [];

  //constructor(private itemService: ItemService) {}

  // ngOnInit(): void {
  //   this.getItems();
  // }

  // getItems(): void {
  //   this.itemService.getItems().subscribe((items) => {
  //     this.items = items;
  //   });
  // }
}
