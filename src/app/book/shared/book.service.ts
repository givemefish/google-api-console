import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  booksApiUrl = 'https://www.googleapis.com/books/v1/volumes';

  getBookById(id: any): any {
    return this.http.get(`${this.booksApiUrl}/${id}`);
  }

  searchBooks(query: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.booksApiUrl}/?q=${query}`);
  }
}
