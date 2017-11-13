import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookService } from './book.service';
import { BookComponent } from './book/book.component';
import {RouterModule, Routes} from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { AutorCreateComponent } from './autor-create/autor-create.component';
import { AutorEditComponent } from './autor-edit/autor-edit.component';
import { AutorDetailComponent } from './autor-detail/autor-detail.component';
import { AutorComponent } from './autor/autor.component';


const ROUTES = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookComponent },
  { path: 'book-details/:id', component: BookDetailComponent },
  { path: 'book-create', component: BookCreateComponent },
  { path: 'author-create', component: AutorCreateComponent },
  { path: 'book-edit/:id', component: BookEditComponent },
  { path: 'author-edit/:id', component: AutorEditComponent },
  { path: 'author', component: AutorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    AutorCreateComponent,
    BookEditComponent,
    AutorCreateComponent,
    AutorEditComponent,
    AutorDetailComponent,
    AutorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    BookService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
