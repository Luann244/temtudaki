import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("Home")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("Obejeto")
  getObject(): any {
    return this.appService.getObject();
  }
  
 

}
