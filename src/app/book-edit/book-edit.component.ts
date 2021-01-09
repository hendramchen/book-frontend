import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})
export class BookEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  bookData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.restApi.getBook(this.id).subscribe((data: {}) => {
      this.bookData = data;
    });
  }

  updateBook() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.restApi.updateBook(this.id, this.bookData).subscribe((data) => {
        this.router.navigate(['/book-list']);
      });
    }
  }
}
