import { Injectable } from '@angular/core';
import { TICKETS, Ticket } from '../../data/tickets';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  tickets = TICKETS;

  getEmployeeTickets(employee_id: string) {
    return this.tickets.filter((ticket) => ticket.employee_id === employee_id);
  }

  addNewTicket(title: string, desc: string, employee_id: string) {
    this.tickets.unshift({
      ticket_id: crypto.randomUUID(),
      ticket_title: title,
      ticket_desc: desc,
      created_date: new Date().toISOString(),
      employee_id,
    });
  }
  removeTicket(ticket_id: string) {
    this.tickets = this.tickets.filter((tick) => tick.ticket_id !== ticket_id);
  }
}
