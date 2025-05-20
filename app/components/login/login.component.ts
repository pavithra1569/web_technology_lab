import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    if (this.loginData.email.length < 5) {
      alert('Username must be at least 5 characters.');
      return;
    }

    if (this.loginData.password.length < 8) {
      alert('Password must be at least 8 characters.');
      return;
    }

    this.http.post('http://localhost:3000/api/login', this.loginData)
      .subscribe(
        response => {
          console.log('Login successful', response);
          alert('Login successful!');
          this.loginData = { email: '', password: '' };
        },
        error => {
          console.error('Login error', error);
          alert('Login failed!');
        }
      );
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
