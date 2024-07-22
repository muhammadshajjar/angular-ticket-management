import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { EMPLOYEE_DATA } from './data/employee';
import { EmployeeComponent } from './components/employee/employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  employees = EMPLOYEE_DATA;
  selectedEmployee = '';

  onGetSelectedEmployee(employee_id: string) {
    this.selectedEmployee = employee_id;
  }
  title = 'ticket-management';
}
