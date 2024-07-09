import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`/api${endpoint}`);
  }

  getBy<T>(endpoint: string, id: number): Observable<T> {
    return this.http.get<T>(`/api${endpoint}/${id}`);
  }

  post(endpoint: string, body: any): Observable<any> {
    return this.http.post(`/api${endpoint}`, body, {
      headers: {
        Accept: 'application/json',
      },
    });
  }

  update(endpoint: string, id: any, body: any): Observable<any> {
    return this.http.put(`/api${endpoint}/${id}`, body, {
      headers: {
        Accept: 'application/json',
      },
    });
  }

  delete(endpoint: string, id: number): Observable<any> {
    return this.http.delete(`/api${endpoint}/${id}`, {
      headers: {
        Accept: 'application/json',
      },
    });
  }
}
