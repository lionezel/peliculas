import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, ...arg: any): any {
    const result = [];
    for (const arr of value ?? []) {
      if (
        arr.title
          .toString()
          .toLowerCase()
          .indexOf(arg.toString().toLowerCase()) > -1
      ) {
        result.push(arr);
      }
    }
    return result;
  }
}
