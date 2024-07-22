import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../data/employee';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  @Input() employee!: Employee;
  @Output() employeeId = new EventEmitter<string>();

  onSelectEmployee() {
    this.employeeId.emit(this.employee.employee_id);
  }
}
