import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private key = 'tasks'

  getAll(): Task[]{
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.key, JSON.stringify(tasks));
  }

  addTask(newTask: any): void {

    let tasks = this.getAll();

    if (!Array.isArray(tasks)) {
      tasks = [];
    }
    tasks.push(newTask);
    this.saveTasks(tasks);
  }

  getTask(id:number){
    let tasks = this.getAll();

    return tasks.find(task => task.id === id);
  }

  delete(id:number){
    let tasks = this.getAll();

    tasks = tasks.filter(task => task.id !== id);
    this.saveTasks(tasks);
  }

  update(id:number, updatedTask:any){

    let tasks = this.getAll();

    const index = tasks.findIndex(task => task.id === id);

    if (index !== -1) {

      tasks[index] = { ...updatedTask, id: id };
      this.saveTasks(tasks);
    }else {
      console.error(`Task Not Found`);
    }
  }

}
