import { Routes } from '@angular/router';

import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { NewTicketComponent } from './components/ticket-list/new-ticket/new-ticket.component';
import {
  EmployeeTicketsComponent,
  resolveEmployeeData,
  resolveTitle,
} from './components/employee/employee-tickets/employee-tickets.component';
import { SelectEmployeeComponent } from './components/employee/select-employee/select-employee.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: SelectEmployeeComponent,
    title: 'Tickets | No Employee Selected',
  },
  {
    path: 'employee/:employeeId',
    component: EmployeeTicketsComponent,
    children: [
      {
        path: 'tickets',
        component: TicketListComponent,
      },
      {
        path: 'tickets/new',
        component: NewTicketComponent,
      },
      {
        path: '',
        redirectTo: 'tickets',
        pathMatch: 'prefix',
      },
    ],
    resolve: {
      employeeData: resolveEmployeeData,
    },
    title: resolveTitle,
  },
  { path: '**', component: PageNotFoundComponent },
];
