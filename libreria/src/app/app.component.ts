import { Component } from '@angular/core';
import { BooksService } from './books.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  books;
  title = 'Lista de Libros';


  constructor(booksService: BooksService) {

    this.books = booksService.getBooks();

  }

}
