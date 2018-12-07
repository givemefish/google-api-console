import { BookService } from '../shared/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-detail-page',
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.scss']
})
export class BookDetailPageComponent implements OnInit {
  book: Book;

  constructor(private route: ActivatedRoute, private bookSvc: BookService) { }

  ngOnInit() {
    this.fetchBook();
  }

  fetchBook() {
    this.route.params.subscribe((params) => {
      this.bookSvc.getBookById(params.id)
        .subscribe((book) => {
          this.book = book;
        });
    });
  }

}
