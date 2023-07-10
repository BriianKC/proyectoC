import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './ini-login.component.html',
  styleUrls: ['./ini-login.component.css']
})
export class LoginComponent {
  username = ''; // Inicialización de la propiedad "username"
  password='';

  constructor(private http: HttpClient) {}

  login() {
    const loginData = {
      username: this.username,
      password: this.password
    };

    // Realizar solicitud HTTP a la API para autenticar al usuario
    this.http.post('http://20.163.192.189:8080/api/login/', loginData).subscribe(
      (response) => {
        // Si la solicitud se realizó con éxito, puedes realizar acciones adicionales
        console.log('Respuesta de la API:', response);

        // Aquí puedes redirigir a otra página después de iniciar sesión exitosamente
      },
      (error) => {
        // Si ocurrió un error durante la solicitud, puedes manejarlo aquí
        console.error('Error al autenticar:', error);
      }
    );
  }
}
