import { Component, OnInit } from '@angular/core';
import { cabecera } from 'src/app/interfaces/Clases';

@Component({
  selector: 'app-agr-cobros',
  templateUrl: './agr-cobros.component.html',
  styleUrls: ['./agr-cobros.component.scss']
})
export class AgrCobrosComponent implements OnInit {
  cabecera: cabecera = {
    idPC: '',
    descripcionPC: '',
    fechaPC: '',
    totalPD: 0,
    cedulaCli: '',
    idCB: '',
  };
  constructor() { }

  ngOnInit(): void {
  }

}