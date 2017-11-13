import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AutorService {

  constructor(private http: Http) { }

  getAllAutor() {
    return new Promise((resolve, reject) => {
      this.http.get('/autor')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  showNameAutor(name){
    return new Promise((resolve, reject) =>{
      this.http.get('/autor/filtro_nombre' + name)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  showNameTitulacion(name){
    return new Promise((resolve, reject) =>{
      this.http.get('/autor/filtro_titulacion' + name)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  showNameCuatrimestre(name){
    return new Promise((resolve, reject) =>{
      this.http.get('/autor/filtro_cuatrimestre' + name)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  saveAutor(data) {
    return new Promise((resolve, reject) => {
      this.http.post('/autor', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateAutor(id, data) {
    return new Promise((resolve, reject) => {
      this.http.put('/autor/'+id, data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteAutor(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('/autor/'+id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
