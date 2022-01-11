import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tickets')
  getAll() {
    return this.appService.getAll();
  }

  @Get('tickets/:month')
  getAllByMonth(@Param('month') month) {
    return this.appService.getAllByMonth(month);
  }

  @Get('company/:name')
  getCompany(@Param('name') name) {
    return this.appService.getAllByCompany(name)
  }

  @Get('company/:name/:month')
  getCompanyByMonth(@Param('name') name, @Param('month') month) {
    return this.appService.getCompanyByMonth(name, month)
  }
}
