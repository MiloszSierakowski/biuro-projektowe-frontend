import { PermissionService } from '../../../core/services/permission.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AgreementsUiService {
  private startCreatingSubject = new Subject<void>();
  startCreating$ = this.startCreatingSubject.asObservable();

  constructor(private permissionService: PermissionService) {}

  startCreating(): void {
    this.startCreatingSubject.next();
  }

  showSaveButton(): boolean {
    return this.permissionService.hasRole('WORKER', 'OWNER');
  }
}
