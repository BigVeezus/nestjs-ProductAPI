import { Injectable } from '@nestjs/common';

export interface Person {
  name: string;
  age: number;
}
@Injectable()
export class AppService {
  getDetails(): Person {
    return { name: 'Max', age: 50 };
  }
}
