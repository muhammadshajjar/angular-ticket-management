import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../data/employee';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  @Input() employee!: Employee;
}
