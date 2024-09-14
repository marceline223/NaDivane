import {Component, Input} from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'item-card',
  templateUrl: './ItemCard.html',
  styleUrl: './ItemCard.scss',
  inputs: ['item']
})
export class ItemCard {
  title = 'ItemCard';

  @Input() item: Item | null = null;

  defaultImageUrl: String = "../assets/null-image.webp";
}
