import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'callback',
  pure: false
})
export class CallbackPipe implements PipeTransform {
  filteredItems: Array<any>[] = new Array();
  transform(items: any[], value : number): any[] {
    let filteredItems = [];
    if (!items) return [];
    this.filteredItems = items.filter(item => item.userId === Number(value));
    return this.filteredItems;
  }

}
