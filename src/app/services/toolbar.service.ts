// src/app/services/toolbar.service.ts
import {Injectable} from '@angular/core';
import {mockPlots} from '../mocks/mock';
import {Plot} from '../models/plot';


@Injectable({providedIn: 'root'})
export class ToolbarService {
  // Teraz mock; później podmienimy na HttpClient.get<Plot[]>() z backendu
  getPlots(): Plot[] {
    return mockPlots;
  }
}
