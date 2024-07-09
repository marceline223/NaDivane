import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Item } from '../../models/item.model'
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Category } from "../../models/category.model";
import { CategoryApiService } from "../../../../api/endpoints/category.service";

@Component({
  selector: 'add-item-dialog',
  templateUrl: './AddItemDialog.html',
})
export class AddItemDialog implements OnInit{
  title = 'AddItemDialog';

  visible: boolean = false;

  categories: Category[] = [
    {
      id: 0,
      name: 'Категория0',
    },
    {
      id: 1,
      name: 'Категория1',
    },
    {
      id: 2,
      name: 'Категория2',
    },
    {
      id: 3,
      name: 'Категория3',
    },
    {
      id: 4,
      name: 'Категория4',
    },
    {
      id: 5,
      name: 'Категория5',
    },
  ];

  category: Category | null = null;

  emptyItem: Item = {
    id: 0,
    name: '',
    description: '',
    price: 0.0,
    category: null,
    imageUrl: '',
  };

  value: any;
  itemForm: FormGroup;

  constructor(
    private categoryApiService: CategoryApiService,
    private cRef: ChangeDetectorRef,
  ) {
    this.itemForm = new FormGroup({
      name: new FormControl(this.value?.name, Validators.required),
      description: new FormControl(this.value?.description, Validators.required),
      category: new FormControl(this.value?.category, Validators.required),
      price: new FormControl(this.value?.price, [Validators.required, Validators.min(0.0)]),
      imageUrl: new FormControl(['']),
    });

    // this.itemForm = this.fb.group({
    //   name: [this.value.name, Validators.required],
    //   description: [this.value.description, Validators.required],
    //   category: [this.value.category, Validators.required],
    //   price: [this.value.price, [Validators.required, Validators.min(0.0)]],
    //   imageUrl: ['']
    // });
  }

  resetForm() {
    this.value = JSON.parse(JSON.stringify(this.emptyItem));
  }

  onClickShowDialog() {
    this.resetForm();
    this.visible = true;
  }

  ngOnInit(): void {
    this.resetForm();
    this.categoryApiService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
      this.cRef.detectChanges();
    })
  }

  onClickSave() {
    // код отправки на сервер
    if (!(this.itemForm) || this.itemForm.valid) {
      console.log('New Item:', this.itemForm);
      this.visible = false;
      // Здесь можно вызвать сервис для сохранения нового элемента
    } else {
      console.log('Invalid form');
    }
  };
}
