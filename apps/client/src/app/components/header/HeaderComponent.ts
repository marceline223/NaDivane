import { ChangeDetectorRef, Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item.model';
import {MenuItem} from "primeng/api";
import { Category } from "../../models/category.model";
import { CategoryApiService } from "../../../../api/endpoints/category.service";

@Component({
  selector: 'header-component',
  templateUrl: 'HeaderComponent.html',
})
export class HeaderComponent implements OnInit{
  @Output() itemAdded = new EventEmitter<Item>();

  title = 'HeaderComponent';

  items: MenuItem[] | undefined;
  categories: MenuItem[] | undefined;
  isAddItemDialogVisible: boolean = false;

  constructor(
    private categoryApiService: CategoryApiService,
    private cRef: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.categoryApiService.getCategories().subscribe((data:Category[] ) => {
      this.categories = data
        .map(category => ({
          label: category.name,
          routerLink: `/filter=${category.key}`,
        }))
        .sort();
      this.cRef.detectChanges();
      this.items = [
        {
          label: 'Каталог',
          icon: 'pi pi-shopping-bag',
          routerLink: '',
          items: [
            {
              label: 'Акции',
              icon: 'pi pi-percentage',
              routerLink: '/',
            },
            {
              label: 'Категории',
              icon: 'pi pi-align-justify',
              items: this.categories,
            },
          ]
        },
        {
          label: 'Корзина',
          icon: 'pi pi-shopping-cart'
        }
      ];
    });

  }

  onItemAdded(item: Item): void {
    this.itemAdded.emit(item);
  }
}
