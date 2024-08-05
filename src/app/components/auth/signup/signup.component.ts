import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  employeeForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    //initialize form

    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onFormSubmit() {
    if (this.employeeForm.valid) {
      const value = this.employeeForm.value;
      const employeeData = {
        employee_id: crypto.randomUUID(),
        employee_name: value.name,
        employee_role: value.role,
        ticket_id: crypto.randomUUID(),
        email: value.email,
        password: value.password,
      };

      this.authService.signup(employeeData);
      this.router.navigateByUrl('');
    }
  }
}
