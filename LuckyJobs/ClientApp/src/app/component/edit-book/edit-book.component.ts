import { Component, OnInit, Inject } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  providers:[
    BookService,
    AsignaturaService
  ]
})
export class EditBookComponent implements OnInit {

  idLibro = 0
  descripcion = ""
  stock:number = 0
  asingnatura = 0

  listaAsignaturas=[]
  ready =false  
  constructor(
    public bookService: BookService,
    public asignaturaService:AsignaturaService,
    public dialogRef: MatDialogRef<EditBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
  {
    
  }

  ngOnInit() {
    this.cargarAsignaturas();
    console.log(this.data.libro)
    this.descripcion = this.data.libro.descripcion
    this.stock = this.data.libro.stock
    this.idLibro = this.data.libro.idLibro
    this.asingnatura = this.data.libro.asingnatura
  }

  cargarAsignaturas() {

    this.asignaturaService.getAsignaturas().subscribe(
      result => {
        this.listaAsignaturas = result
        console.log(this.listaAsignaturas)
        this.ready =true 
      },
      error => {

      })
  }

  
  guardar(){
    let book ={
      "idLibro":this.idLibro,
      "descripcion" : this.descripcion,
      "stock" : this.stock,
      "asignatura": this.asingnatura
    }
    this.bookService.putBook(this.idLibro,book).subscribe(
      result => {
        console.log(result)
        this.dialogRef.close("exito");
      },
      error => {
        console.log("error")
      })

  }

}
