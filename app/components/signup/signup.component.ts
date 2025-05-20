import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class SignupComponent {
  signupData = { name: '', email: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {}

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.http.post('http://localhost:3000/api/signup', this.signupData)
      .subscribe(
        response => {
          console.log('Signup successful', response);
          alert('Signup successful!');
          this.signupData = { name: '', email: '', password: '' };
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Signup error', error);
          alert('Signup failed! Please try again.');
        }
      );
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
