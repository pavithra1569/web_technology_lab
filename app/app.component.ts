import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Import RouterModule here

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],  // Add RouterModule in the imports array for standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Art Gallery';
  
}
