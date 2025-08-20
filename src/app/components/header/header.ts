import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  @Output() roleChange = new EventEmitter<string>();

  selectedRole: string = 'client';

  roles = [
    { label: 'Klient', value: 'client' },
    { label: 'Pracownik', value: 'employee' },
    { label: 'Właściciel', value: 'owner' },
    { label: 'Administrator', value: 'admin' }
  ];

  setRole(role: string) {
    this.selectedRole = role;
    this.roleChange.emit(role);
  }
}
