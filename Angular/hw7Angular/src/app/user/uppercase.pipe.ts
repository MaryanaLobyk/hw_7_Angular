import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    value = value.toUpperCase();
    return value;
  }
}
