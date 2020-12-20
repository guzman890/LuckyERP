import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { MatDialog } from '@angular/material/dialog';
import { FormAsignaturaComponent } from '../form-asignatura/form-asignatura.component';
import { EditAsignaturaComponent } from '../edit-asignatura/edit-asignatura.component';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css'],
  providers:[
    AsignaturaService
  ]
})
export class AsignaturaComponent implements OnInit {

  listaAsignaturas= []
  displayedColumns: string[] = ['ID', 'Descripcion', 'Estado', 'Acciones'];

  constructor(
    private asignaturaService: AsignaturaService,
    public dialog: MatDialog,
  ) 
  { 

  }

  ngOnInit() {
   
    this.cargarAsignaturas();
  }

  registrarAsignatura() {
    const dialogRef = this.dialog.open(FormAsignaturaComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cargarAsignaturas()
      } else {
        console.log("Error");
      }
    });

  }

  actualizarAsignatura(elemento) {

    const dialogRef = this.dialog.open(EditAsignaturaComponent, {
      data: {
        "asignatura" : elemento
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cargarAsignaturas()
      } else {
        console.log("Error");
      }
    });

  }

  eliminarAsignatura(elemento){
    this.asignaturaService.deleteAsignatura(elemento.idAsig).subscribe(
      result => {
        console.log(result)
        this.cargarAsignaturas()
      },
      error => {
        console.log("Error");
      })
  
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

}
