import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-book' },
  { path: 'create-book', component: BookCreateComponent },
  { path: 'book-list', component: BookListComponent },
  { path: 'book-edit/:id', component: BookEditComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
