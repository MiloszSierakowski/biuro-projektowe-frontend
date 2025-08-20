import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.scss'],
})
export class ToolbarComponent {
  @Input() role: 'client' | 'employee' | 'owner' | 'admin' = 'client';
  @Input() screen: string = '';

  isItemSelected: boolean = false;
  projectSelected: boolean = false;
  addToProjectClicked: boolean = false;

  // Sztywne działki testowe
  plots = [
    { id: 'p1', name: 'Działka 101/2' },
    { id: 'p2', name: 'Działka 203/4' },
    { id: 'p3', name: 'Działka 305/1' },
  ];

  get showSelect(): boolean {
    return ['postepy', 'dzialka', 'projekt', 'uslugi', 'podsumowanie', 'ustalenia', 'pracownik'].includes(this.screen);
  }

  get showEdit(): boolean {
    return ['dzialka', 'projekt'].includes(this.screen) && this.isItemSelected;
  }

  get showAddService(): boolean {
    return this.screen === 'ustalenia' && this.isItemSelected && ['owner', 'employee'].includes(this.role);
  }

  get showAddToProject(): boolean {
    return this.screen === 'uslugi' && this.role === 'owner' && this.projectSelected && !this.addToProjectClicked;
  }

  get showSaveCancel(): boolean {
    return this.screen === 'uslugi' && this.role === 'owner' && this.addToProjectClicked;
  }

  get showSearch(): boolean {
    return this.screen === 'wyszukaj' && ['employee', 'owner'].includes(this.role);
  }

  get showAdminControls(): boolean {
    return this.role === 'admin' && ['biura', 'uzytkownicy'].includes(this.screen);
  }

  onPlotChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.isItemSelected = !!value;
    this.projectSelected = !!value;
  }

  onAddToProjectClick() {
    this.addToProjectClicked = true;
  }

  onCancelClick() {
    this.addToProjectClicked = false;
  }
}
