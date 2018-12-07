import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { BookCollection } from '../models/book-collection.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  booksApiUrl = 'https://www.googleapis.com/books/v1/volumes';

  private replaceHttpsInProps(book: Book): Book {
    const propsToModify = ['thumbnail', 'smallThumbnail', 'small', 'medium', 'large'];
    propsToModify.forEach((prop) => {
      if (book.volumeInfo && book.volumeInfo.imageLinks && book.volumeInfo.imageLinks[prop]) {
        book.volumeInfo.imageLinks[prop] = book.volumeInfo.imageLinks[prop].replace('http://', 'https://');
      }
    });
    return book;
  }

  getBookById(id: any): any {
    return this.http.get<Book>(`${this.booksApiUrl}/${id}`)
      .pipe(map(book => this.replaceHttpsInProps(book)));
  }

  searchBooks(query: string): Observable<Book[]> {
    return this.http.get<BookCollection>(`${this.booksApiUrl}/?q=${query}`)
      .pipe(map(bookCollection => bookCollection.items.map(this.replaceHttpsInProps)));
  }
}
