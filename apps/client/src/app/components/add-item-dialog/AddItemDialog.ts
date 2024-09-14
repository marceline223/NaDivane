import {ChangeDetectorRef, Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Item } from '../../models/item.model'
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Category } from "../../models/category.model";
import { CategoryApiService } from "../../../../api/endpoints/category.service";
import { ItemApiService } from "../../../../api/endpoints/item.service";

@Component({
  selector: 'add-item-dialog',
  templateUrl: './AddItemDialog.html',
})
export class AddItemDialog implements OnInit{
  @Output() itemAdded = new EventEmitter<Item>();

  title = 'AddItemDialog';

  visible: boolean = false;

  categories: Category[] | undefined;

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
    private itemApiService: ItemApiService,
    private cRef: ChangeDetectorRef,
  ) {
    this.itemForm = new FormGroup({
      name: new FormControl(this.value?.name, Validators.required),
      description: new FormControl(this.value?.description),
      category: new FormControl(this.value?.category, Validators.required),
      price: new FormControl(this.value?.price, [Validators.required, Validators.min(0.0)]),
      imageUrl: new FormControl(['']),
    });
  }

  isSaveBtnDisabled() {
    return !this.itemForm.valid;
  }

  resetForm() {
    this.itemForm.reset();
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

  onFileUpload(event: any) {
    const file = event.files[0];
    const formData = new FormData();
    formData.append('file', file);

    // Отправляем файл на сервер
    //this.http.post<{ imageUrl: string }>('/api/upload', formData).subscribe(response => {
      //this.newItem.imageUrl = response.imageUrl; // Сохраняем URL изображения
    //});
  }

  onClickSave() {
    if (!(this.itemForm) || this.itemForm.valid) {
      this.visible = false;
      this.itemApiService.createItem(this.itemForm.value).subscribe(() => {
        this.itemAdded.emit(this.itemForm.value);
        this.cRef.detectChanges();
      });
    }
  };
}
