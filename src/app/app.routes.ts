import { Routes } from '@angular/router';

import { TicketsComponent } from './components/tickets/tickets.component';
import { NewTicketComponent } from './components/tickets/new-ticket/new-ticket.component';
import { EmployeeTicketsComponent } from './components/employee/employee-tickets/employee-tickets.component';
import { SelectEmployeeComponent } from './components/employee/select-employee/select-employee.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: SelectEmployeeComponent },
  {
    path: 'employee/:employeeId',
    component: EmployeeTicketsComponent,
    children: [
      {
        path: 'tickets',
        component: TicketsComponent,
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
  },
  { path: '**', component: PageNotFoundComponent },
];
