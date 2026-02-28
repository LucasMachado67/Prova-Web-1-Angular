import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../../service/storage-service';
import { Task } from '../../models/Task';
import { Header } from "../../components/header/header";
import { ActivatedRoute, Router } from '@angular/router';
import { TaskStatus } from '../../Enum/TaskStatus';


@Component({
  selector: 'app-update-component',
  imports: [Header, ReactiveFormsModule],
  templateUrl: './update-component.html',
  styleUrl: './update-component.scss',
})
export class UpdateComponent implements OnInit{

  task: any;
  taskForm!: FormGroup;
  public taskStatuses = Object.values(TaskStatus);

  constructor(private fb: FormBuilder, private service:StorageService, private router:Router, private routeActive:ActivatedRoute) {
    this.taskForm = this.fb.group({
      subject: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: [''],
      date: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }
  

  submit(){
      if (this.taskForm.invalid) {
        alert('Por favor, preencha todos os campos corretamente.');
        return; 
      }
      const taskData: Task = {
        ...this.taskForm.value,
      };
      this.service.update(this.task.id, taskData);
      this.taskForm.reset();
      this.router.navigate(['/task/', this.task.id]);
      alert("task saved")
  }

  cancel() {
    this.router.navigate(['/task/', this.task.id])
  }

  loadTask():void{
    const id = Number(this.routeActive.snapshot.paramMap.get('id'));
    this.task = this.service.getTask(id);
  }
  ngOnInit(): void {
    this.loadTask();

    if(this.task){
      console.log('Status da task vindo do service:', this.task.status);
      this.taskForm.patchValue({
        subject: this.task.subject,
        description: this.task.description,
        date: this.task.date,
        status: this.task.status
      })
    }
  }


}
