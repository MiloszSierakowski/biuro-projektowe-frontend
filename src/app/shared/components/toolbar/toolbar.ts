import {Component, Input, OnInit} from '@angular/core';
import {Plot} from '../../../models/plot';
import {ToolbarService} from '../../../services/toolbar.service';
import {SelectionService} from '../../../services/selection.service';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() role?: 'CLIENT' | 'EMPLOYEE' | 'OWNER' | string;
  @Input() screen?: string;

  plots: Plot[] = [];
  selectedPlot: Plot | null = null; // wiążemy cały obiekt

  constructor(
    private toolbarService: ToolbarService,
    private selectionService: SelectionService
  ) {}

  ngOnInit(): void {
    // 1) Załaduj listę działek z mocka
    this.plots = this.toolbarService.getPlots();

    // 2) Jednorazowo odtwórz wybór (po odświeżeniu)
    this.selectedPlot = this.selectionService.getSelectedPlotSnapshot();
  }

  // Wywoływane tylko po świadomej zmianie użytkownika
  onPlotChange(plot: Plot | null): void {
    this.selectedPlot = plot;
    this.selectionService.setSelectedPlot(plot);
  }
}
