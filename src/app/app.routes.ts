import { Routes } from '@angular/router';

import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { NewTicketComponent } from './components/ticket-list/new-ticket/new-ticket.component';
import {
  EmployeeTicketsComponent,
  resolveEmployeeData,
  resolveTitle,
} from './components/employee/employee-tickets/employee-tickets.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/auth/login/login.component';
import {
  SignupComponent,
  pendingChangesGuard,
} from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'signup',
    canDeactivate: [pendingChangesGuard],
    component: SignupComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Tickets | No Employee Selected',
    canActivate: [authGuard],
    children: [
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
    ],
  },

  { path: '**', component: PageNotFoundComponent },
];
