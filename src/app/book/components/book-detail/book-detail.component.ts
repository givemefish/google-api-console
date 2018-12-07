import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  @Input() book: Book;

  constructor(private location: Location) { }

  ngOnInit() {
  }
  get id() {
    return this.book.id;
  }

  get title() {
    if (this.book.volumeInfo) {
      return this.book.volumeInfo.title;
    }
    return '';
  }

  get subtitle() {
    if (this.book.volumeInfo) {
      return this.book.volumeInfo.subtitle;
    }
    return '';
  }

  get description() {
    if (this.book.volumeInfo) {
      return this.book.volumeInfo.description;
    }
    return '';
  }

  get thumbnail(): string {
    if (this.book.volumeInfo && this.book.volumeInfo.imageLinks) {
      return this.book.volumeInfo.imageLinks.smallThumbnail;
    }
    return '';
  }

  back() {
    this.location.back();
  }
}
