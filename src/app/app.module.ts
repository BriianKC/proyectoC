import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './componentes/login/ini-login.component';
//import { HomeComponent } from './componentes/home/home.component';

// Define las rutas de tu aplicación
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  //{ path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a login por defecto
  { path: '**', redirectTo: '/login' } // Redirige a login para cualquier otra ruta no definida
];

// @NgModule({
//   //declarations: [LoginComponent, HomeComponent],
//   imports: [BrowserModule, RouterModule.forRoot(routes)],
//   bootstrap: [LoginComponent] // Componente de inicio (puede ser el LoginComponent o el AppComponent)
// })
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { InicioComponent } from './componentes/bancos/inicio/inicio.component';
import { AgregarComponent } from './componentes/bancos/agregar/agregar.component';
import { ModificarComponent } from './componentes/bancos/modificar/modificar.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { ReactiveFormsModule } from '@angular/forms';
import { IniCobrosComponent } from './componentes/cobros/ini-cobros/ini-cobros.component';
import { AgrCobrosComponent } from './componentes/cobros/agr-cobros/agr-cobros.component';
import { IniClientesComponent } from './componentes/clientes/ini-clientes/ini-clientes.component';
import { IniPagosComponent } from './componentes/pagos/ini-pagos/ini-pagos.component';
import { IniDeudoresComponent } from './componentes/deudores/ini-deudores/ini-deudores.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ModificarComponent,
    AgregarComponent,
    IniCobrosComponent,
    AgrCobrosComponent,
    IniClientesComponent,
    IniPagosComponent,
    IniDeudoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzSpinModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
