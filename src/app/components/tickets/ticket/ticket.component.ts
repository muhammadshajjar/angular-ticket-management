import { Component, Input, inject } from '@angular/core';
import { Ticket } from '../../../data/tickets';
import { DatePipe } from '@angular/common';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  private ticketService = inject(TicketsService);
  @Input() ticket!: Ticket;

  onComplete() {
    this.ticketService.removeTicket(this.ticket.ticket_id);
  }
}
