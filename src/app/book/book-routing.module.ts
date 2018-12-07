import { BookDetailPageComponent } from './pages/book-detail-page.component';
import { BookPageComponent } from './pages/book-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: BookPageComponent },
  { path: ':id', component: BookDetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
