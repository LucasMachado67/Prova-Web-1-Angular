import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Header } from "../../components/header/header";
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../../service/storage-service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-details-component',
  imports: [DatePipe, Header],
  templateUrl: './details-component.html',
  styleUrl: './details-component.scss',
})
export class DetailsComponent implements OnInit{


  description: string = "";
  date: Date = new Date();
  subject: string = "";
  task: any;
  activeDeleteCard: boolean = false;

  constructor(private route:ActivatedRoute, private service:StorageService, private router:Router){}
  
  loadTask():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.service.getTask(id);
  }

  goToUpdatePage():void{
    this.router.navigate(['/update/', this.task.id],{
        state: {task: this.task}
      });
  }

  delete():void{
    this.service.delete(this.task.id);
    this.activeDeleteCard = false;
    this.return();
  }


  return() {
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
    this.loadTask();
  }
}
