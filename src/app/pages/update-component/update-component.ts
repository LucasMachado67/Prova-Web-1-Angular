import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { StorageService } from '../../service/storage-service';
import { Task } from '../../models/Task';
import { Header } from "../../components/header/header";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-component',
  imports: [Header, ReactiveFormsModule],
  templateUrl: './update-component.html',
  styleUrl: './update-component.scss',
})
export class UpdateComponent implements OnInit{

  task: any;
  taskForm!: FormGroup;

  constructor(private fb: FormBuilder, private service:StorageService, private router:Router, private routeActive:ActivatedRoute) {
    this.taskForm = this.fb.group({
      subject: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: [''],
      date: ['', [Validators.required]],
      schedule: ['',[Validators.required]]
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
  }


}
