import { SharedMaterialModule } from '../shared/shared-material/shared-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookPageComponent } from './pages/book-page.component';
import { BookDetailPageComponent } from './pages/book-detail-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './shared/book.service';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

@NgModule({
  declarations: [BookPageComponent, BookDetailPageComponent, BookListComponent, BookPreviewComponent, BookDetailComponent, EllipsisPipe],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedMaterialModule,
    BookRoutingModule
  ],
  providers: [BookService]
})
export class BookModule { }
