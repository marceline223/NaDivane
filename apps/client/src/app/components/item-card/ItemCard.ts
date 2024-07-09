import {Component, Input} from '@angular/core';

@Component({
  selector: 'item-card',
  templateUrl: './ItemCard.html',
  inputs: ['item']
})
export class ItemCard {
  title = 'ItemCard';

  @Input() item: string = "";
}
