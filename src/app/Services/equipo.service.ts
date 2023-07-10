import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuentaB,cabecera } from '../interfaces/Clases';

// --------------- Class Cuenta Bancaria ---------------
@Injectable({
  providedIn: 'root',
})
export class EquipoService {
  url = 'http://localhost:5000/api/cuentab/';
  // url = 'https://cuentas2.azurewebsites.net/api/cuentab/';
  constructor(private http: HttpClient) {}

  //get Cuentas bancarias
  getCuentasBancarias(): Observable<any> {
    return this.http.get(this.url);
  }
  //get cuenta bancaria por idCB
  getCuentaBancaria(id: string) {
    return this.http.get(this.url + '/' + id);
  }
  //create cuenta bancaria
  addCuentasBancaria(CuentaB: CuentaB) {
    return this.http.post(this.url, CuentaB);
  }
  //delete cuenta bancaria
  deleteCuentasBancaria(id: string) {
    return this.http.delete(this.url + '' + id);
  }
  //edit cuenta bancaria
  editCuentasBancaria(id: string, CuentaB: CuentaB) {
    return this.http.put(this.url + '' + id, CuentaB);
  }
}

// --------------- Class Cliente ---------------
@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  url = 'https://facturasapi20230628183435.azurewebsites.net/api/FactClientes';
  constructor(private http: HttpClient) {}
  getClientes(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}

// --------------- Class Cobros ---------------
@Injectable({
  providedIn: 'root',
})
export class CobroService {
  url = 'https://cuentas2.azurewebsites.net/api/cabeceras/';
  constructor(private http: HttpClient) {}
  getCobros(): Observable<any> {
    return this.http.get(this.url);
  }
  //get Una CB
  getCobro(id: string) {
    return this.http.get(this.url + '/' + id);
  }
  getPagosCuentas(id: string) {
    return this.http.get(
      'https://cuentas2.azurewebsites.net/api/cuentab' + '/' + id
    );
  }
  //creat CB
  addCobro(cabecera: cabecera) {
    return this.http.post(this.url, cabecera);
  }
  //delete CB
  deleteCobro(id: string) {
    return this.http.delete(this.url + '' + id);
  }
  //edit CB
  editCuentasBancaria(id: string, cabecera: cabecera) {
    return this.http.put(this.url + '' + id, cabecera);
  }
}
