import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public validarCPF(cpf: string): boolean {
    const cpfNumerico = cpf.replace(/\D/g, '');
    if (cpfNumerico.length !== 11) {
      return false;
    }
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpfNumerico.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    const digitoVerificador1 = resto < 2 ? 0 : 11 - resto;
    if (digitoVerificador1 !== parseInt(cpfNumerico.charAt(9))) {
      return false;
    }
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpfNumerico.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    const digitoVerificador2 = resto < 2 ? 0 : 11 - resto;
    if (digitoVerificador2 !== parseInt(cpfNumerico.charAt(10))) {
      return false;
    }
    return true;
  }  
}
