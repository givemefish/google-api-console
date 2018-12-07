import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {
  @Input() book: Book;

  constructor() { }

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

}
