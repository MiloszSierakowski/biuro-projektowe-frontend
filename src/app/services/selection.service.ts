// src/app/services/selection.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Plot } from '../models/plot';

@Injectable({ providedIn: 'root' })
export class SelectionService {
  // trzymamy wybraną DZIAŁKĘ (cały obiekt)
  private readonly selectedPlotSubject = new BehaviorSubject<Plot | null>(null);

  // publikacja zmian wyboru
  getSelectedPlot$(): Observable<Plot | null> {
    return this.selectedPlotSubject.asObservable();
  }

  // ustawienie wyboru
  setSelectedPlot(plot: Plot | null): void {
    this.selectedPlotSubject.next(plot);
  }

  // czyszczenie wyboru
  clearSelectedPlot(): void {
    this.selectedPlotSubject.next(null);
  }

  // (opcjonalnie) szybki snapshot bez subskrypcji
  getSelectedPlotSnapshot(): Plot | null {
    return this.selectedPlotSubject.value;
  }
}
