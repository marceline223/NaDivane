import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Category } from '../../src/app/models/category.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoryApiService {
  constructor(private readonly apiService: ApiService) {}

  getCategories(): Observable<Category[]> {
    return this.apiService.get<Category[]>('/category');
  }
}
