import { Component, OnInit } from '@angular/core';
import { AutorService } from '../autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  autor: any;

  constructor(private autorService: AutorService) { }

  ngOnInit() {
    this.getAutorList();
  }
  getAutorList() {
    this.autorService.getAllAutor().then((res) => {
      this.autor = res;
    }, (err) => {
      console.log(err);
    });
  }
  filtro_nombre() {
    this.autorService.showNameAutor(this.filtro_nombre).then((res) => {
      this.autor = res;
    }, (err) => {
      console.log(err);
    });
  }
  filtro_titulacion() {
    this.autorService.showNameTitulacion(this.filtro_titulacion).then((res) => {
      this.autor = res;
    }, (err) => {
      console.log(err);
    });
  }
  filtro_cuatrimestre() {
    this.autorService.showNameCuatrimestre(this.filtro_cuatrimestre).then((res) => {
      this.autor = res;
    }, (err) => {
      console.log(err);
    });
  }
}
