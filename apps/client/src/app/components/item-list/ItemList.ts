import {ChangeDetectorRef, Component} from '@angular/core';
import { Item } from '../../models/item.model'
import {ItemApiService} from "../../../../api/endpoints/item.service";

@Component({
  selector: 'item-list',
  templateUrl: './ItemList.html',
})
export class ItemList{
  title = 'ItemList';

  list: Item[] = [];

  constructor(private itemService: ItemApiService,
              private cRef: ChangeDetectorRef,) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    const items$ = this.itemService.getItems();
    items$.subscribe((items) => {
        this.list = items;
        this.cRef.detectChanges();
    });
  }
}
