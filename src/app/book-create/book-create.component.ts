import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
})
export class BookCreateComponent implements OnInit {
  @Input() bookDetail = {
    title: '',
    author: '',
    description: '',
  };
  constructor(public restApi: RestApiService, public router: Router) {}

  ngOnInit(): void {}

  addBook() {
    this.restApi.createBook(this.bookDetail).subscribe((data) => {
      this.router.navigate(['/book-list']);
    });
  }
}
