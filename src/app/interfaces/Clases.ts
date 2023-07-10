export interface CuentaB {
  idCB: string;
  nombreCB: string;
  entidadCB: string;
  descripcionCB: string;
  estadoCB: boolean;
}

export interface cliente{
  cliIdentification: string,
  cliName: string,
  cliBirthday: string,
  cliAddres: string,
  cliPhone: string,
  cliMail: string,
}

export interface cabecera {
  idPC: string;
  descripcionPC: string;
  fechaPC: string;
  totalPD: number;
  cedulaCli: string;
  idCB: string;
}





