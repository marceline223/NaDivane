import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'header-component',
  templateUrl: 'HeaderComponent.html',
})
export class HeaderComponent implements OnInit{
  title = 'HeaderComponent';

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Каталог',
        icon: 'pi pi-shopping-bag',
        routerLink: '',
        items: [
          {
            label: 'Акции',
            icon: 'pi pi-percentage'
          },
          {
            label: 'Категории',
            icon: 'pi pi-align-justify',
            items: [
              {
                label: 'Все',
              },
              {
                label: 'Продукты',
              },
              {
                label: 'Техника',
              },
              {
                label: 'Одежда и обувь',
              },
              {
                label: 'Товары для дома',
              },
              {
                label: 'Книги',
              },
            ]
          },
        ]
      },
      {
        label: 'Корзина',
        icon: 'pi pi-shopping-cart'
      }
    ]
  }

  isAddItemDialogVisible: boolean = false;
}
