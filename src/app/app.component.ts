import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { EMPLOYEE_DATA, Employee } from './data/employee';
import { EmployeeComponent } from './components/employee/employee.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, EmployeeComponent, TicketsComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  employees = EMPLOYEE_DATA;
  selectedEmployeeId?: string;

  get selectedEmployee() {
    return this.employees.find(
      (employee) => employee.employee_id === this.selectedEmployeeId
    );
  }
  onGetSelectedEmployeeID(employee_id: string) {
    this.selectedEmployeeId = employee_id;
  }

  trackByIds(index: number, item: Employee): string {
    return item.employee_id;
  }
  title = 'ticket-management';
}
