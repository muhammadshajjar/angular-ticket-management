import { Component } from '@angular/core';
import { EMPLOYEE_DATA } from '../../models/data/employee';
import { TicketsService } from '../../services/tickets.service';
import { TICKETS } from '../../models/data/tickets';
import { EmployeeComponent } from '../employee/employee.component';
import { NgFor } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Employee } from '../../models/interfaces/employee';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EmployeeComponent, NgFor, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  employees = EMPLOYEE_DATA;
  constructor(
    private ticketService: TicketsService,
    private AuthService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employees = this.AuthService.getEmployees();
    this.ticketService.loadTickets(TICKETS);
  }
  onLogout(): void {
    this.AuthService.logout();
    this.router.navigateByUrl('');
  }
  trackByIds(index: number, item: Employee): string {
    return item.employee_id;
  }
}
