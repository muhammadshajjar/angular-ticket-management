import { Injectable } from '@angular/core';
import { TICKETS } from '../../data/tickets';
import { BehaviorSubject, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  // tickets = TICKETS;
  private _tickets = new BehaviorSubject(TICKETS);

  tickets$ = this._tickets.asObservable();

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
    this._tickets.next([newTicket, ...this._tickets.value]);
  }

  removeTicket(ticket_id: string) {
    this._tickets.next(
      this._tickets.value.filter((tick) => tick.ticket_id !== ticket_id)
    );
  }
}
