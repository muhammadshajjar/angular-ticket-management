import { Component, OnInit } from '@angular/core';
import { TicketComponent } from './ticket/ticket.component';
import { TicketsService } from './tickets.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { Ticket } from '../../data/tickets';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [TicketComponent, NgFor, NgIf, AsyncPipe],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css',
})
export class TicketListComponent implements OnInit {
  constructor(
    private ticketService: TicketsService,
    private activatedRoutes: ActivatedRoute
  ) {}

  employeeTickets$: Observable<Ticket[]> | null = null;

  ngOnInit(): void {
    this.employeeTickets$ = this.activatedRoutes.paramMap.pipe(
      switchMap((paramMap) => {
        const employeeId = paramMap.get('employeeId');
        if (employeeId) {
          return this.ticketService.getEmployeeTickets(employeeId);
        } else return [];
      })
    );
  }

  onComplete(id: string) {
    this.ticketService.removeTicket(id);
  }

  // employeeTickets!: Ticket[];
  // private subscription!: Subscription;

  // ngOnInit(): void {
  //   this.activatedRoutes.paramMap.subscribe((paramMap) => {
  //     const employeeId = paramMap.get('employeeId');

  //     if (employeeId) {
  //      subscription =
  //         this.ticketService.getEmployeeTickets(employeeId);
  //     }
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
