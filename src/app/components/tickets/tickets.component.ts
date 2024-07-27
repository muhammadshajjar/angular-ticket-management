import { Component, Input, inject } from '@angular/core';
import { Employee } from '../../data/employee';
import { TicketComponent } from './ticket/ticket.component';
import { TicketsService } from './tickets.service';
import { NgFor, NgIf } from '@angular/common';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [TicketComponent, TicketComponent, NgFor, NgIf, NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  private ticketService = inject(TicketsService);
  @Input() selectedEmployee!: Employee;

  isShowForm = false;

  get employeeTickets() {
    return this.ticketService.getEmployeeTickets(
      this.selectedEmployee.employee_id
    );
  }
  onAssignNewTicket() {
    this.isShowForm = true;
  }
  onGetCancelForm() {
    this.isShowForm = false;
  }
}
