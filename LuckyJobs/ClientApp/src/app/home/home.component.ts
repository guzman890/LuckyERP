import { Component } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [
    AsignaturaService,
    BookService
  ]
})
export class HomeComponent {
  displayedColumns: string[] = ['ID', 'Descripcion', 'Stock', 'Acciones'];

  value = ""

  listaLibros = []

  listaLibrosFiltro = []
  constructor(
    private bookService: BookService,
  ) {

  }

  ngOnInit() {

    this.cargarBooks();
  }

 
  cargarBooks() {

    this.bookService.getBooks().subscribe(
      result => {
        this.listaLibros = result
        this.listaLibrosFiltro = result
        console.log(this.listaLibros)
      },
      error => {

      })
  }

  onChangeValue() {
    this.listaLibrosFiltro = this.listaLibros.filter(x => x.descripcion.includes(this.value));
  }
}
