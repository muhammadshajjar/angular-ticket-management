import { Injectable } from '@angular/core';
import { EMPLOYEE_DATA } from '../models/data/employee';
import { Employee } from '../models/interfaces/employee';
import { StorageKeys } from '../models/enums';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _employees: Employee[] = EMPLOYEE_DATA;
  private _token: string | null = null;

  constructor() {
    this._token = localStorage.getItem(StorageKeys.AuthToken);
  }

  getEmployees(): Employee[] {
    return this._employees;
  }

  login(email: string, password: string) {
    const employee = this._employees.find(
      (emp) => emp.email === email && emp.password === password
    );

    if (employee) {
      this._token = this.generateToken();
      localStorage.setItem(StorageKeys.AuthToken, this._token);
      return true;
    }
    return false;
  }
  signup(employeeData: Employee) {
    this._employees.push(employeeData);
  }

  logout() {
    this._token = null;
    localStorage.removeItem(StorageKeys.AuthToken);
  }
  isAuthenticated() {
    return this._token;
  }

  private generateToken() {
    return Math.random().toString(36).substring(2);
  }
}
