import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/users/")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(":cpf")
  ValidarCPF(@Param("cpf") cpf: string): boolean {
    return this.appService.validarCPF(cpf);
  }
}
