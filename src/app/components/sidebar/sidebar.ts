import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() role: 'client' | 'employee' | 'owner' | 'admin' = 'client';
  navLinks: { label: string; path: string }[] = [];

  private readonly NAV_LINKS: Record<string, { label: string; path: string }[]> = {
    client: [
      {label: 'Menu główne', path: '/menu'},
      {label: 'Postępy prac', path: '/postepy'},
      {label: 'Działka', path: '/dzialka'},
      {label: 'Projekt budynku', path: '/projekt'},
      {label: 'Usługi', path: '/uslugi'},
      {label: 'Podsumowanie projektu', path: '/podsumowanie'},
      {label: 'Przypisany pracownik', path: '/pracownik'},
      {label: 'Ustalenia', path: '/agreements'},
      {label: 'Kontakt', path: '/kontakt'},
    ],
    employee: [
      {label: 'Menu główne', path: '/menu'},
      {label: 'Wyszukaj', path: '/wyszukaj'},
      {label: 'Postępy prac', path: '/postepy'},
      {label: 'Działka', path: '/dzialka'},
      {label: 'Projekt budynku', path: '/projekt'},
      {label: 'Usługi', path: '/uslugi'},
      {label: 'Podsumowanie projektu', path: '/podsumowanie'},
      {label: 'Ustalenia', path: '/agreements'},
      {label: 'Kontakt', path: '/kontakt'},
    ],
    owner: [
      {label: 'Menu główne', path: '/menu'},
      {label: 'Wyszukaj', path: '/wyszukaj'},
      {label: 'Postępy prac', path: '/postepy'},
      {label: 'Działka', path: '/dzialka'},
      {label: 'Projekt budynku', path: '/projekt'},
      {label: 'Usługi', path: '/uslugi'},
      {label: 'Podsumowanie projektu', path: '/podsumowanie'},
      {label: 'Ustalenia', path: '/agreements'},
      {label: 'Dodaj użytkownika', path: '/dodaj-uzytkownika'},
      {label: 'Kontakt', path: '/kontakt'},
    ],
    admin: [
      {label: 'Lista biur projektowych', path: '/biura'},
      {label: 'Lista użytkowników systemu', path: '/uzytkownicy'},
    ],
  };

  ngOnInit(): void {
    this.updateNav();
  }

  ngOnChanges(): void {
    this.updateNav();
  }

  private updateNav() {
    this.navLinks = this.NAV_LINKS[this.role];
  }
}
