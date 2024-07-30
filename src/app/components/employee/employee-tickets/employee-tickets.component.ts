import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';
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
  // employees = EMPLOYEE_DATA;
  // private _employeeData?: Employee;

  @Input() employeeData!: Employee;
  // @Input()
  // set employeeId(id: string) {
  //   this._employeeData = this.employees.find((emp) => emp.employee_id === id);
  // }

  // get employeeData() {
  //   return this._employeeData;
  // }
}
export const resolveEmployeeData: ResolveFn<Employee | undefined> = (
  activatedRoute,
  routerState
) => {
  return EMPLOYEE_DATA.find(
    (emp) => emp.employee_id === activatedRoute.paramMap.get('employeeId')
  );
};

export const resolveTitle: ResolveFn<string> = (
  activatedRoute,
  routerState
) => {
  const result = resolveEmployeeData(activatedRoute, routerState);

  if (result && 'employee_name' in result) {
    return `${result.employee_name}'s Tickets`;
  } else return '';
};

