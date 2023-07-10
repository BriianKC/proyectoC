import { Component, OnInit } from '@angular/core';
import { CuentaB } from '../../../interfaces/Clases';
import { EquipoService } from 'src/app/Services/equipo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  listaBancos: CuentaB[] = [
    {
      idCB: 'CTA-BAN-001',
      nombreCB: 'Banco de la Nación',
      entidadCB: 'Bancaria',
      descripcionCB: 'Frente al parque',
      estadoCB: true,
    },
    {
      idCB: 'CTA-BAN-002',
      nombreCB: 'Banco Fomento',
      entidadCB: 'Bancaria',
      descripcionCB: 'Frente al Municipio',
      estadoCB: true,
    },
  ];

  listaCuentaBancaria: CuentaB[] = [];
  constructor(private EquipoService: EquipoService, private Router: Router) {}

  ngOnInit(): void {
    this.listarCuentasBancarias();
  }
  listarCuentasBancarias() {
    this.EquipoService.getCuentasBancarias().subscribe(
      (data:any) => {
        this.listaCuentaBancaria =data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
