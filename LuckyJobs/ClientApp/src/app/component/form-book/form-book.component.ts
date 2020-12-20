import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BookService } from 'src/app/services/book.service';
import { AsignaturaService } from 'src/app/services/asignatura.service';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.css'],
  providers:[
    BookService,
    AsignaturaService
  ]
})
export class FormBookComponent implements OnInit {

  descripcion = ""
  stock:number = 0
  asingnatura = 0
  listaAsignaturas=[]
  
  constructor(
    public bookService: BookService,
    public asignaturaService:AsignaturaService,
    public dialogRef: MatDialogRef<FormBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
  {
    this.cargarAsignaturas();
  }

  ngOnInit() {

  }

  cargarAsignaturas() {

    this.asignaturaService.getAsignaturas().subscribe(
      result => {
        this.listaAsignaturas = result
        console.log(this.listaAsignaturas)
      },
      error => {

      })
  }

  
  guardar(){
    let book ={
      "descripcion" : this.descripcion,
      "stock" : this.stock,
      "asignatura": this.asingnatura
    }
    this.bookService.postBook(book).subscribe(
      result => {
        console.log(result)
        this.dialogRef.close("exito");
      },
      error => {
        console.log("error")
      })

  }
}
