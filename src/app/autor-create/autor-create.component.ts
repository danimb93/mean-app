import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutorService } from '../autor.service';

@Component({
  selector: 'app-autor-create',
  templateUrl: './autor-create.component.html',
  styleUrls: ['./autor-create.component.css']
})
export class AutorCreateComponent implements OnInit {
  autor = {};

  constructor(private autorService: AutorService, private router: Router) { }


  ngOnInit() {
  }
  saveAutor() {
    this.autorService.saveAutor(this.autor).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/autor-details', id]);
    }, (err) => {
      console.log(err);
    });
  }
}
