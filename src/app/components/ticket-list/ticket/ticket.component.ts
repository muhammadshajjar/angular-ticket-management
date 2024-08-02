import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ticket } from '../../../data/tickets';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  @Input() ticket!: Ticket;
  @Output() complete = new EventEmitter();

  onComplete() {
    this.complete.emit(this.ticket.ticket_id);
  }
}
