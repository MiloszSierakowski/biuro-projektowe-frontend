import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  role: 'client' | 'employee' | 'owner' | 'admin' = 'client';
  screen: string = 'uslugi';

  onRoleChange(role: string) {
    this.role = role as 'client' | 'employee' | 'owner' | 'admin';
  }
}
