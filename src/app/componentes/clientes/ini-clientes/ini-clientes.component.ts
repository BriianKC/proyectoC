import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/Services/equipo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ini-clientes',
  templateUrl: './ini-clientes.component.html',
  styleUrls: ['./ini-clientes.component.scss'],
})
export class IniClientesComponent implements OnInit {
  listaClientes: any[] = [];
  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    // this.listarClientes();
    //this.getListClientes();
    this.obtenerListClientes();
  }
  listarClientes() {
    this.clienteService.getClientes().subscribe((datos) => {
      datos.forEach((element: any) => {
        this.listaClientes.push(element);
      });
    });
  }
  getListClientes() {
    this.clienteService.getClientes().subscribe((datos) => {
      this.listaClientes = datos.results;
    });
  }
  obtenerListClientes() {
    this.clienteService.getClientes().subscribe(
      (data: any) => {
        this.listaClientes = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
