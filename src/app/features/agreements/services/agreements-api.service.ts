import {Injectable} from '@angular/core';
import {mockPlots, mockMeetings} from '../../../mocks/mock';

@Injectable({
  providedIn: 'root'
})
export class AgreementsApiService {

  // Zwraca spotkania dla konkretnej działki (na razie filtr po kliencie)
  getMeetings(plotId: number | null) {
    const plot = mockPlots.find(p => p.id === plotId);
    if (!plot) return [];

    return mockMeetings.filter(m => m.client === plot.client);
  }
}
