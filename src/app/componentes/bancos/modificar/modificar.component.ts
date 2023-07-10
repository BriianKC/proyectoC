import { Component, OnInit } from '@angular/core';
import { CuentaB } from '../../../interfaces/Clases';
import { EquipoService } from 'src/app/Services/equipo.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css'],
})
export class ModificarComponent implements OnInit {
  cuentaB: CuentaB = {
    idCB: '',
    nombreCB: '',
    entidadCB: '',
    descripcionCB: '',
    estadoCB: true,
  };

  validateForm!: FormGroup;
  nombreControl = new FormControl('');

  constructor(
    private EquipoService: EquipoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.formulario();
  }
  ngOnInit(): void {
    this.sacarId();

  }

  cuentaBForm = new FormGroup({
    nombreCB: this.nombreControl,
  });

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

  Modificar(event: Event) {
    this.EquipoService.editCuentasBancaria(
      this.cuentaB.idCB,
      this.cuentaB
    ).subscribe(
      (res) => {
        this.router.navigate(['/inicio']);
      },
      (err) => console.log(err)
    );
  }

  sacarId() {
    const id_entrada = this.activatedRoute.snapshot.params['id'];
    if (id_entrada) {
      this.EquipoService.getCuentaBancaria(id_entrada).subscribe(
        (res) => {
          this.cuentaB = <any>res;
        },
        (err) => console.log(err)
      );
    }
  }
}
