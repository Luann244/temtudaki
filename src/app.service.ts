import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Friends 2019!';
  }

  getObject(): any {
    let objeto ={
      id: 1,
      nome: "Luann"
    }
    return objeto
  }
}
