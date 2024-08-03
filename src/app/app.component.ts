import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { EMPLOYEE_DATA, Employee } from './data/employee';
import { EmployeeComponent } from './components/employee/employee.component';
import { NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketsService } from './components/ticket-list/tickets.service';
import { TICKETS } from './data/tickets';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    EmployeeComponent,
    TicketListComponent,
    NgFor,
    NgIf,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  employees = EMPLOYEE_DATA;
  constructor(private ticketService: TicketsService) {}

  ngOnInit(): void {
    this.ticketService.loadTickets(TICKETS);
  }
  trackByIds(index: number, item: Employee): string {
    return item.employee_id;
  }
  title = 'ticket-management';
}
