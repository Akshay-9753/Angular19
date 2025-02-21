import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'akshay',
  standalone: false
})
export class AkshayPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.charAt(0);
  }

}
