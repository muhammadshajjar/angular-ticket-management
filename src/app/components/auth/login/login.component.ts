import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  enteredEmail = '';
  enteredPassword = '';
  feedback = '';

  onSubmit() {
    const result = this.authService.login(
      this.enteredEmail,
      this.enteredPassword
    );
    if (result) {
      this.router.navigateByUrl('/home');
    } else {
      this.feedback = 'UserName or Password is Incorrect!';
    }
  }
}
