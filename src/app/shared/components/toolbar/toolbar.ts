import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plot } from '../../../models/plot';
import { ToolbarApiService } from './toolbar-api.service';
import { SelectionService } from '../../../core/services/selection.service';
import { PermissionService, Role } from '../../../core/services/permission.service';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.scss'],
})
export class ToolbarComponent implements OnInit {
  plots: Plot[] = [];
  selectedPlot: Plot | null = null;

  currentRole: Role = null;

  constructor(
    private toolbarService: ToolbarApiService,
    private selectionService: SelectionService,
    private permissionService: PermissionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Pobranie ról z serwisu
    this.permissionService.role$.subscribe((role) => {
      this.currentRole = role;
    });

    // Załaduj działki
    this.plots = this.toolbarService.getPlots();

    // Przywróć wybraną działkę (jeśli była)
    this.selectedPlot = this.selectionService.getSelectedPlotSnapshot();
  }

  // Czy pokazać przycisk dodawania usługi
  showAddServiceButton(): boolean {
    const currentPath = this.router.url;
    const hasRole = this.permissionService.hasRole('WORKER', 'OWNER');

    console.log('🔎 DEBUG showAddServiceButton()');
    console.log('currentPath:', currentPath);
    console.log('currentRole:', this.currentRole);
    console.log('hasRole:', hasRole);

    return hasRole && currentPath.includes('agreements');
  }

  // Zmiana działki
  onPlotChange(plot: Plot | null): void {
    this.selectedPlot = plot;
    this.selectionService.setSelectedPlot(plot);
  }
}
