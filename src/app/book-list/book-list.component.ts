import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
// import { Book } from "../shared/book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  Book: any = [];
  constructor(public restApi: RestApiService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    return this.restApi.getBooks().subscribe((data: {}) => {
      this.Book = data;
    });
  }

  deleteBook(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteBook(id).subscribe((data) => {
        console.log(data);
        this.loadBooks();
      });
    }
  }
}
