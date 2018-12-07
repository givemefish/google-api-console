import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MatInput } from '@angular/material';
import { BookService } from '../shared/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {

  @ViewChild('searchInput') searchInput: MatInput;
  $searchTextChanged = new Subject<string>();
  searchText = '';
  searching = false;
  books: Book[] = [];
  obj: any;

  constructor(private bookSvc: BookService) { }

  ngOnInit() {
    this.$searchTextChanged.pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(searchTextVal => {
        this.searchBooks(this.searchText);
      });
  }

  onSearchTextChange(newSearchText: string) {
    if (newSearchText === '') {
      this.searchText = '';
      this.books = [];
    } else {
      this.$searchTextChanged.next(newSearchText);
    }
  }

  searchBooks(searchText: string): any {
    this.searching = true;
    if (searchText) {
      this.bookSvc.searchBooks(searchText)
        .subscribe((books: Book[]) => {
          this.books = books;
          this.searching = false;
        });
    } else {
      setTimeout(() => {
        this.books = [];
        this.searchText = '';
        this.searching = false;
      }, 500);
    }
  }
}
