import { Component, OnInit } from '@angular/core';
import { CuentaB } from '../../../interfaces/Clases';
import { EquipoService } from 'src/app/Services/equipo.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  listarCuentas: CuentaB[] = [];
  contador: number = 0;
  codigo: string = 'CTA-BAN-00';
  validateForm!: FormGroup;

  constructor(
    private EquipoService: EquipoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.listarCuentasBancarias();
    this.formulario();
  }

  formulario() {
    this.validateForm = this.formBuilder.group({
      nombreCB: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern(/^[A-Za-z]+(\s{1}[A-Za-z]+)*$/),
        ],
      ],
      entidadCB: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern(/^[A-Za-z]+(\s{1}[A-Za-z]+)*$/),
        ],
      ],
      descripcionCB: [
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.pattern(/^[A-Za-z]+(\s{1}[A-Za-z]+)*$/),
        ],
      ],
      estadoCB: [null, [Validators.required]],
    });
  }

  submitForm(event: Event) {
    event.preventDefault();
    if (this.validateForm.valid) {
      const value = this.validateForm.value;
      const cuentaB = {
        idCB: this.codigo + '' + this.contador,
        nombreCB: value.nombreCB,
        entidadCB: value.entidadCB,
        descripcionCB: value.descripcionCB,
        estadoCB: value.estadoCB,
      };
      this.EquipoService.addCuentasBancaria(cuentaB).subscribe();
      setTimeout(() => {
        this.router.navigate(['/inicio']);
      }, 200);
    } else {
      this.validateForm.markAllAsTouched();
    }
  }

  listarCuentasBancarias() {
    this.EquipoService.getCuentasBancarias().subscribe(
      (data) => {
        this.listarCuentas = <any>data;
        this.contador = this.listarCuentas.length + 1;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  resetForm(): void {
    this.validateForm.reset();
  }
}
