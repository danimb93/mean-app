import { Component, OnInit } from '@angular/core';
import { AutorService } from '../autor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-autor-detail',
  templateUrl: './autor-detail.component.html',
  styleUrls: ['./autor-detail.component.css']
})
export class AutorDetailComponent implements OnInit {
  autor = {};

  constructor(private route: ActivatedRoute, private router: Router, private autorService: AutorService) { }

  ngOnInit() {
    this.getAutorDetail(this.route.snapshot.params['id']);
  }
  getAutorDetail(id) {
    this.autorService.showAutor(id).then((res) => {
      this.autor = res;
      console.log(this.autor);
    }, (err) => {
      console.log(err);
    });
  }

  deleteAutor(id) {
    this.autorService.deleteAutor(id).then((result) => {
      this.router.navigate(['/autors']);
    }, (err) => {
      console.log(err);
    });
  }}
