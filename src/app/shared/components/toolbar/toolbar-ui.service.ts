import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionService, Role } from '../../../core/services/permission.service';

@Injectable({ providedIn: 'root' })
export class ToolbarUiService {
  private currentRole: Role = null;

  constructor(
    private permissionService: PermissionService,
    private router: Router
  ) {}

  init(): void {
    this.permissionService.role$.subscribe((role) => {
      this.currentRole = role;
    });
  }

  showAddServiceButton(): boolean {
    const currentPath = this.router.url;
    const hasRole = this.permissionService.hasRole('WORKER', 'OWNER');
    return hasRole && currentPath.includes('agreements');
  }
}
