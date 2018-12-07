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
    return null;
  }

  get subtitle() {
    if (this.book.volumeInfo) {
      return this.book.volumeInfo.subtitle;
    }
    return null;
  }

  get description() {
    if (this.book.volumeInfo) {
      return this.book.volumeInfo.description;
    }
    return null;
  }

  get image(): string {
    if (this.book.volumeInfo && this.book.volumeInfo.imageLinks) {
      return this.book.volumeInfo.imageLinks.small || this.book.volumeInfo.imageLinks.smallThumbnail;
    }
    return null;
  }

  get authors(): string {
    if (this.book.volumeInfo) {
      return this.book.volumeInfo.authors.join(',');
    }
    return null;
  }

  get publisher(): string {
    if (this.book.volumeInfo) {
      return this.book.volumeInfo.publisher;
    }
    return null;
  }

  get publishedDate(): string {
    if (this.book.volumeInfo) {
      return this.book.volumeInfo.publishedDate;
    }
    return null;
  }

  get averageRating(): number {
    if (this.book.volumeInfo) {
      return this.book.volumeInfo.averageRating;
    }
    return null;
  }

  back() {
    this.location.back();
  }
}
