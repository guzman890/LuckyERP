import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsignaturaService } from 'src/app/services/asignatura.service';

@Component({
  selector: 'app-form-asignatura',
  templateUrl: './form-asignatura.component.html',
  styleUrls: ['./form-asignatura.component.css'],
  providers:[
    AsignaturaService
  ]
})
export class FormAsignaturaComponent implements OnInit {

  descripcion = ""
  estado = false

  constructor(
    public asignaturaService:AsignaturaService,
    public dialogRef: MatDialogRef<FormAsignaturaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 

  }

  ngOnInit() {

  }

  guardar(){
    let asignatura ={
      "descripcion":this.descripcion,
      "estado":this.estado
    }
    this.asignaturaService.postAsignatura(asignatura).subscribe(
      result => {
        console.log(result)
        this.dialogRef.close("exito");
      },
      error => {
        console.log("Error")
      })
  }
}
