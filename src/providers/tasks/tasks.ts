import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable()
export class TasksProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) {}

  public insert(task: Task){
    let key = this.datepipe.transform(new Date(), 'ddMMyyyyHHmmss');
    return this.save(key, task);
  }

  private save(key: string, task: Task){
    return this.storage.set(key, task);
  }

  public remove(key: string){
    return this.storage.remove(key);
  }

  public update(key: string, task: Task){
    return this.save(key, task);
  }

  public getAll(){
    let tasks: listTasks[] = [];

    return this.storage.forEach((value: Task, key: string, itrationNumber: Number) => {
      let task = new listTasks;
      task.key = key;
      task.task = value;
      //console.log(task.task);
      tasks.push(task);
    })
    .then(() => {
      return Promise.resolve(tasks);
    })
    .catch(() => {
      return Promise.reject(Error);
    });
  }
}

export class Task{
  task: string;
  priority: string;
  body: string;
  deadline: string;
  status: string;
}

export class listTasks{
  key: string;
  task: Task;
}
