import { Injectable } from '@angular/core';
import { TICKETS, Ticket } from '../../data/tickets';
import { BehaviorSubject, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  // tickets = TICKETS;
  private _ticketsSource = new BehaviorSubject<Ticket[]>([]);

  tickets$ = this._ticketsSource.asObservable();

  loadTickets(tickets: Ticket[]) {
    this._ticketsSource.next(tickets);
  }
  getEmployeeTickets(employee_id: string) {
    return this.tickets$.pipe(
      map((tickets) =>
        tickets.filter((ticket) => ticket.employee_id === employee_id)
      )
    );
  }

  addNewTicket(title: string, desc: string, employee_id: string) {
    const newTicket = {
      ticket_id: crypto.randomUUID(),
      ticket_title: title,
      ticket_desc: desc,
      created_date: new Date().toISOString(),
      employee_id,
    };
    this._ticketsSource.next([newTicket, ...this._ticketsSource.value]);
  }

  removeTicket(ticket_id: string) {
    this._ticketsSource.next(
      this._ticketsSource.value.filter((tick) => tick.ticket_id !== ticket_id)
    );
  }
}
