import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ResolveFn,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { EMPLOYEE_DATA, Employee } from '../../../data/employee';
import { Observable, Subject, Subscription, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-employee-tickets',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './employee-tickets.component.html',
  styleUrl: './employee-tickets.component.css',
})
export class EmployeeTicketsComponent implements OnInit, OnDestroy {
  constructor(private activatedRoutes: ActivatedRoute) {}
  private subscription$!: Subscription;
  private destroy$ = new Subject<void>();
  employeeData!: Employee;

  // ngOnInit(): void {
  //   this.subscription$ = this.activatedRoutes.data.subscribe((data) => {
  //     this.employeeData = data['employeeData'];
  //   });
  // }
  // ngOnDestroy(): void {
  //   this.subscription$.unsubscribe();
  // }
  ngOnInit(): void {
    this.activatedRoutes.data
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.employeeData = data['employeeData'];
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
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
