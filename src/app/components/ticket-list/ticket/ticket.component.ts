import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Ticket } from '../../../models/interfaces/ticket';

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
