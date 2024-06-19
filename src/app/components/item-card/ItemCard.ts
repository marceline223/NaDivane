import { Component } from '@angular/core';

@Component({
  selector: 'item-card',
  templateUrl: './ItemCard.html',
  inputs: ['id']
})
export class ItemCard {
  title = 'ItemCard';

  
}
