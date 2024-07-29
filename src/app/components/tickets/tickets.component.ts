import { Component, Input, inject } from '@angular/core';
import { TicketComponent } from './ticket/ticket.component';
import { TicketsService } from './tickets.service';
import { NgFor, NgIf } from '@angular/common';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from '../../data/tickets';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [TicketComponent, TicketComponent, NgFor, NgIf, NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  private ticketService = inject(TicketsService);

  // private employeeTickets$?: Ticket[];
  // @Input()
  // set employeeId(id: string) {
  //   console.log(id);
  //   this.employeeTickets$ = this.ticketService.getEmployeeTickets(id);
  // }
  // get employeeTickets() {
  //   return this.employeeTickets$;
  // }

  @Input() employeeId!: string;

  get employeeTickets() {
    console.log('This called!!');
    return this.ticketService.getEmployeeTickets(this.employeeId);
  }
}
