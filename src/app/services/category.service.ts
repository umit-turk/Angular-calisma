import { Category } from './../models/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {

  return  this.httpClient.get<Category[]>(this.apiUrl);
  }
}
