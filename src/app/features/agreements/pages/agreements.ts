// src/app/components/pages/agreements/agreements.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SelectionService } from '../../../core/services/selection.service';
import { AgreementsApiService } from '../services/agreements-api.service';

import { Plot } from '../../../models/plot';
import { Meeting } from '../../../models/meeting';

@Component({
  selector: 'app-agreements',
  standalone: false,
  templateUrl: './agreements.html',
  styleUrls: ['./agreements.scss']
})
export class AgreementsComponent implements OnInit, OnDestroy {
  selectedPlot: Plot | null = null;

  meetings: Meeting[] = [];
  selectedMeeting: Meeting | null = null;

  private sub?: Subscription;

  constructor(
    private selection: SelectionService,
    private agreementsSvc: AgreementsApiService
  ) {}

  ngOnInit(): void {
    // Reaguj na wybór działki z Toolbara (SelectionService trzyma cały Plot)
    this.sub = this.selection.getSelectedPlot$().subscribe((plot: Plot | null) => {
      this.selectedPlot = plot;
      const selectedPlotID = this.selectedPlot ? this.selectedPlot.id : null;
      this.selectedMeeting = null;
      this.meetings = [];

      // gdy jest wybrana działka – wczytaj spotkania z mocka
      if (selectedPlotID !== null) {
        this.meetings = this.agreementsSvc.getMeetings(selectedPlotID);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onClickRow(m: Meeting): void {
    this.selectedMeeting = m;
  }

  // pomocniczo do numeracji/formatu
  pad(n: number | string): string {
    const num = typeof n === 'string' ? parseInt(n, 10) : n;
    return String(num).padStart(2, '0');
  }
}
