import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe1',
})
export class CustomPipe1Pipe implements PipeTransform {
  transform(value: any): unknown {
    let cyear: any = new Date().getFullYear();
    let byear: any = new Date(value).getFullYear();
    let userAge = cyear - byear;
    return userAge;
  }
}
