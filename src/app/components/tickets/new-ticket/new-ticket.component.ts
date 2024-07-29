import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicketsService } from '../tickets.service';

import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  @Input() employeeId!: string;
  private router = inject(Router);
  private ticketService = inject(TicketsService);

  enteredTitle = '';
  enteredDesc = '';

  onSubmit(form: NgForm) {
    this.ticketService.addNewTicket(
      this.enteredTitle,
      this.enteredDesc,
      this.employeeId
    );

    this.router.navigate(['/employee', this.employeeId, 'tickets']);
  }
}
