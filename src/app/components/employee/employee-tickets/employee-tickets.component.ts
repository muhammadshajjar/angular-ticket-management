import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EMPLOYEE_DATA, Employee } from '../../../data/employee';

@Component({
  selector: 'app-employee-tickets',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './employee-tickets.component.html',
  styleUrl: './employee-tickets.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeTicketsComponent {
  employees = EMPLOYEE_DATA;
  private _employeeData?: Employee;

  @Input()
  set employeeId(id: string) {
    this._employeeData = this.employees.find((emp) => emp.employee_id === id);
  }

  get employeeData() {
    return this._employeeData;
  }
}
