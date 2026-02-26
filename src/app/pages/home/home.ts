import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { CardComponent } from "../../components/card-component/card-component";
import { StorageService } from '../../service/storage-service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-home',
  imports: [Header, CardComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  myTasks: Task[] = [];

  constructor(private service:StorageService){}


  ngOnInit(): void {
    this.myTasks = this.service.getAll();
  }

}
