import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StorageService } from '../../service/storage-service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-registrar',
  imports: [Header, ReactiveFormsModule],
  templateUrl: './registrar.html',
  styleUrl: './registrar.scss',
})
export class Registrar {
  
  taskForm!: FormGroup;

  constructor(private fb: FormBuilder, private service:StorageService) {
    this.taskForm = this.fb.group({
      subject: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: [''],
      date: ['', [Validators.required]]
    });
  }
  
  submit(){
    if (this.taskForm.invalid) {
      alert('Por favor, preencha todos os campos corretamente.');
      return; 
    }
    const taskData: Task = {
      ...this.taskForm.value,
      id: Date.now(),
      status: 'scheduled'
    };
    this.service.addTask(taskData);
    this.taskForm.reset();
    alert("task saved")
  }
}
