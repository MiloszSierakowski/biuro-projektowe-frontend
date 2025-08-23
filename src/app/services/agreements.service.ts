import {Injectable} from '@angular/core';
import {mockPlots, mockMeetings} from '../mocks/mock';

@Injectable({
  providedIn: 'root'
})
export class AgreementsService {

  // Zwraca listę działek
  getPlots() {
    return mockPlots;
  }

  // Zwraca spotkania dla konkretnej działki (na razie filtr po kliencie)
  getMeetings(plotId: number) {
    const plot = mockPlots.find(p => p.id === plotId);
    if (!plot) return [];

    return mockMeetings.filter(m => m.client === plot.client);
  }
}
