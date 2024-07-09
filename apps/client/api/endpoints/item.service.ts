import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Item } from '../../src/app/models/item.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ItemApiService {
  constructor(private readonly apiService: ApiService) {}

  getItems(): Observable<Item[]> {
    return this.apiService.get<Item[]>('/item');
  }
}
