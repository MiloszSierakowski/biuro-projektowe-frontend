import { Component } from '@angular/core';
import { PermissionService, Role } from '../../services/permission.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  selectedRole: Role = null;

  roles = [
    { label: 'Klient', value: 'CLIENT' },
    { label: 'Pracownik', value: 'WORKER' },
    { label: 'Właściciel', value: 'OWNER' },
    { label: 'Administrator', value: 'ADMIN' }
  ];

  constructor(private permissionService: PermissionService) {}

  setRole(role: string): void {
    this.selectedRole = role as Role;
    this.permissionService.setRole(role as Role);
  }

}
