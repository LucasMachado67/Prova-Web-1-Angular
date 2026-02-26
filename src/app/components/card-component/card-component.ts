import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { StorageService } from '../../service/storage-service';
import { Task } from '../../models/Task';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card-component',
  imports: [DatePipe],
  templateUrl: './card-component.html',
  styleUrl: './card-component.scss',
})
export class CardComponent {
  
  @Input() subject: string = "subject"
  @Input() date: string = "date"
  @Input() id: string = ""

  task = new Task;
  constructor(private service:StorageService, private route:Router){}

  viewBook(id: string) {
    
    const idNumber: number = Number(id);
    const foundTask = this.service.getTask(idNumber);

    if(foundTask){
      this.task = foundTask;
      this.route.navigate(['/task/', this.task.id],{
        state: {task: this.task}
      });
    }else{
      console.error("Task not found with id: ", id);
    }
  }

}
