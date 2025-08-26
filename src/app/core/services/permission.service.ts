import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Role = 'CLIENT' | 'WORKER' | 'OWNER' | 'ADMIN' | null;

@Injectable({ providedIn: 'root' })
export class PermissionService {
  private readonly roleSubject = new BehaviorSubject<Role>(null);

  /** publiczny strumień tylko do odczytu */
  readonly role$: Observable<Role> = this.roleSubject.asObservable();

  /** aktualna wartość roli (do szybkiego podejrzenia) */
  get currentRole(): Role {
    return this.roleSubject.value;
  }

  /** zmiana roli (np. przez select w headerze) */
  setRole(role: Role): void {
    this.roleSubject.next(role);
  }

  /** sprawdzenie czy aktualna rola jest jedną z dozwolonych */
  hasRole(...roles: Exclude<Role, null>[]): boolean {
    const current = this.roleSubject.value;
    return !!current && roles.includes(current);
  }
}
