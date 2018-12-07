import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() books: Book[];

  constructor() { }

  ngOnInit() {
  }

}
