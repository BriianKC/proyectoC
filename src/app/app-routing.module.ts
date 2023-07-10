import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { InicioComponent } from './componentes/bancos/inicio/inicio.component';
import { AgregarComponent } from './componentes/bancos/agregar/agregar.component';
import { ModificarComponent } from './componentes/bancos/modificar/modificar.component';
import { IniCobrosComponent } from './componentes/cobros/ini-cobros/ini-cobros.component';
import { AgrCobrosComponent } from './componentes/cobros/agr-cobros/agr-cobros.component';
import { IniClientesComponent } from './componentes/clientes/ini-clientes/ini-clientes.component';
import { IniDeudoresComponent } from './componentes/deudores/ini-deudores/ini-deudores.component';
import { IniPagosComponent } from './componentes/pagos/ini-pagos/ini-pagos.component';
import { LoginComponent } from './componentes/login/ini-login.component';
const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'modificar/:id', component: ModificarComponent },
  { path: 'iniCobros', component: IniCobrosComponent },
  { path: 'agrCobros', component: AgrCobrosComponent },
  { path: 'iniClientes', component: IniClientesComponent },
  { path: 'iniDeudores', component: IniDeudoresComponent },
  { path: 'login', component: LoginComponent },
  { path: 'iniPagos', component: IniPagosComponent },
  //{ path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
