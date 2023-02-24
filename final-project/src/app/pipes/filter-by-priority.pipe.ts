import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../common/interfaces';

@Pipe({
  name: 'filterByPriority'
})
export class FilterByPriorityPipe implements PipeTransform {

  transform(tasks: Task[], selectPriorityForFiltration:number): Task[] {
    return selectPriorityForFiltration === -1
    ? tasks 
    : tasks.filter(task => task.priorityId === selectPriorityForFiltration);
  }

}
