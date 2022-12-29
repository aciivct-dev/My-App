import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUp'
})
export class ToUpPipe implements PipeTransform {
  transform(value: string): string {
    let upper: string = new String(value).toUpperCase();
    return upper;
  }
}
