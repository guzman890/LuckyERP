import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { BookService } from 'src/app/services/book.service';
import { FormBookComponent } from '../form-book/form-book.component';
import { EditBookComponent } from '../edit-book/edit-book.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers:[
    AsignaturaService,
    BookService
  ]
})

export class BookComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Descripcion', 'Stock', 'Acciones'];

  value=""

  listaLibros = []

  listaLibrosFiltro = []
  constructor(
    private bookService: BookService,
    public dialog: MatDialog,
  ) 
  { 

  }

  ngOnInit() {
   
    this.cargarBooks();
  }

  registrarBook() {
    const dialogRef = this.dialog.open(FormBookComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cargarBooks()
      } else {
        console.log("Error");
      }
    });

  }
  actualizarLibro(elemento) {

    const dialogRef = this.dialog.open(EditBookComponent, {
      data: {
        "libro" : elemento
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cargarBooks()
      } else {
        console.log("Error");
      }
    });

  }

  eliminarLibro(elemento){
    this.bookService.deleteBook(elemento.idLibro).subscribe(
      result => {
        console.log(result);
        this.cargarBooks()
      },
      error => {
        console.log("Error");
      })
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

  onChangeValue(){
    this.listaLibrosFiltro = this.listaLibros.filter( x => x.descripcion.includes(this.value));
  }
}
