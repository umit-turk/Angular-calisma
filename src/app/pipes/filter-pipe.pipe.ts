import { Todo } from './../models/todo';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(value: Todo[], filterText: string): Todo[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (p: Todo) => p.title.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
