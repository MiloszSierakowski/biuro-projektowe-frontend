import { Component, OnInit } from '@angular/core';
import { Plot } from '../../../models/plot';
import { ToolbarApiService } from './toolbar-api.service';
import { SelectionService } from '../../../core/services/selection.service';
import { ToolbarUiService } from './toolbar-ui.service';
import { AgreementsUiService } from '../../../features/agreements/services/agreements-ui.service';


@Component({
  selector: 'app-toolbar',
  standalone: false,
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.scss'],
})
export class ToolbarComponent implements OnInit {
  plots: Plot[] = [];
  selectedPlot: Plot | null = null;

  constructor(
    private toolbarService: ToolbarApiService,
    private selectionService: SelectionService,
    public ui: ToolbarUiService,
    private agreementsUiService: AgreementsUiService,
  ) {}

  ngOnInit(): void {
    this.ui.init(); // Subskrypcje i role

    this.plots = this.toolbarService.getPlots();
    this.selectedPlot = this.selectionService.getSelectedPlotSnapshot();
  }

  onPlotChange(plot: Plot | null): void {
    this.selectedPlot = plot;
    this.selectionService.setSelectedPlot(plot);
  }

  onAddServiceClick(): void {
    this.agreementsUiService.startCreating();
  }
}
