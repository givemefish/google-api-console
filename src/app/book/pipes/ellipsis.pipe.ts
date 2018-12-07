import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(str: string, strLength: number = 150): string {
    const withoutHtml = str.replace(/(<([^>]+)>)/ig, '');
    if (str.length >= strLength) {
      return `${withoutHtml.slice(0, strLength)}...`;
    }
    return withoutHtml;
  }

}
