import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutorService } from '../autor.service';

@Component({
  selector: 'app-autor-edit',
  templateUrl: './autor-edit.component.html',
  styleUrls: ['./autor-edit.component.css']
})
export class AutorEditComponent implements OnInit {
  autor = {};

  constructor(private autorService: AutorService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAutor(this.route.snapshot.params['id']);
  }

  getAutor(id) {
    this.autorService.showAutor(id).then((res) => {
      this.autor = res;
      console.log(this.autor);
    }, (err) => {
      console.log(err);
    });
  }

  updateAutor(id) {
    this.autorService.updateAutor(id, this.autor).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/autor-details', id]);
    }, (err) => {
      console.log(err);
    });
  }
}

