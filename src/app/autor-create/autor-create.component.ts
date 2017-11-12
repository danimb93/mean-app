import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-autor-create',
  templateUrl: './autor-create.component.html',
  styleUrls: ['./autor-create.component.css']
})
export class AutorCreateComponent implements OnInit {
  book = {};

  constructor(private autorService: BookService, private router: Router) { }


  ngOnInit() {
  }
  saveAutor() {
    this.autorService.saveBook(this.book).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/book-details', id]);
    }, (err) => {
      console.log(err);
    });
  }
}
