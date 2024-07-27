import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  inject,

} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketsService } from '../tickets.service';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  @Output() status = new EventEmitter();
  @Input() employeeId!: string;
  private ticketService = inject(TicketsService);

  enteredTitle = '';
  enteredDesc = '';
  onCancel() {
    this.status.emit();
  }
  onSubmit(form:NgForm) {
    console.log(form)
    this.ticketService.addNewTicket(
      this.enteredTitle,
      this.enteredDesc,
      this.employeeId
    );
    this.status.emit();
  }
}
