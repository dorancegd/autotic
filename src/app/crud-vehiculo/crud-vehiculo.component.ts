import { RequestBackendService } from './../request-backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crud-vehiculo',
  templateUrl: './crud-vehiculo.component.html',
  styleUrls: ['./crud-vehiculo.component.scss']
})
export class CrudVehiculoComponent implements OnInit {
  

  value = '';

  displayedColumns: string[] = [
    "tipo",
    "marca",
    "modelo",
    "cilindraje",
    "capacidadPasajeros",
    "kilometraje",
    "placa",
    "fechaUltimaRevision",
    "color",
    "detalles",
    
  ];
  dataSource: any = [];

  constructor(private servicioBackend: RequestBackendService) {
    this.servicioBackend.getData().subscribe(
      (data) => {
        this.dataSource = data;
      },
      (error) => {
        console.log(error);
        this.dataSource = [];
      }
    );
  }

  ngOnInit(): void {}
}
