import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../common/interfaces';

@Pipe({
  name: 'filterByTaskName'
})
export class FilterByTaskNamePipe implements PipeTransform {

  transform(tasks: Task[], inputSearchTaskByName: string ): Task[] {
    return inputSearchTaskByName === "" 
    ? tasks 
    : tasks.filter(task => task.name.toLowerCase().includes(inputSearchTaskByName.trim().toLowerCase()));
  }

}
