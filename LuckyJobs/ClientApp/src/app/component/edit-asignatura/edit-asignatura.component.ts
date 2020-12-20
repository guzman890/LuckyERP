import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsignaturaService } from 'src/app/services/asignatura.service';

@Component({
  selector: 'app-edit-asignatura',
  templateUrl: './edit-asignatura.component.html',
  styleUrls: ['./edit-asignatura.component.css'],
  providers:[
    AsignaturaService
  ]
})
export class EditAsignaturaComponent implements OnInit {
  descripcion = ""
  estado = false
  idAsig = 0
  constructor(
    public asignaturaService:AsignaturaService,
    public dialogRef: MatDialogRef<EditAsignaturaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    
  }

  ngOnInit() {
    console.log(this.data.asignatura)
    this.descripcion = this.data.asignatura.descripcion
    this.estado = this.data.asignatura.estado
    this.idAsig = this.data.asignatura.idAsig
  }

  guardar(){
    let asignatura ={
      "idAsig":this.idAsig,
      "descripcion":this.descripcion,
      "estado":this.estado
    }
    this.asignaturaService.putAsignatura(this.idAsig,asignatura).subscribe(
      result => {
        console.log(result)
        this.dialogRef.close("exito");
      },
      error => {
        console.log("Error")
      })
  }

}
