// src/app/mocks/agreements.mock.ts
// Mock danych dla panelu Ustalenia (Klient) zgodny z modelami

import { Plot } from '../models/plot';
import { Meeting } from '../models/meeting';

// Lista działek
export const mockPlots: Plot[] = [
  { id: 'P-001', name: 'Działka 12/7 – Gdynia', client: 'Jan Kowalski' },
  { id: 'P-002', name: 'Działka 8/3 – Rumia',   client: 'Anna Nowak' },
  { id: 'P-003', name: 'Działka 4/21 – Sopot',  client: 'Piotr Zieliński' },
];

// Lista spotkań – kluczowe: id + plotId (bez pola client)
export const mockMeetings: Meeting[] = [
  {
    id: 1,
    plotId: 'P-001',
    name: 'Spotkanie 1',
    date: '2025-06-01',
    description: 'Pierwsze spotkanie dotyczące zebrania dokumentacji',
  },
  {
    id: 2,
    plotId: 'P-001',
    name: 'Spotkanie 2',
    date: '2025-06-08',
    description: 'Omówienie projektu budynku i lokalizacji',
  },
  {
    id: 3,
    plotId: 'P-001',
    name: 'Spotkanie 3',
    date: '2025-06-15',
    description: 'Ustalenia dotyczące infrastruktury i instalacji',
  },
  // przykłady dla innych działek
  {
    id: 4,
    plotId: 'P-002',
    name: 'Spotkanie 1',
    date: '2025-06-03',
    description: 'Start ustaleń dla działki w Rumi',
  },
  {
    id: 5,
    plotId: 'P-003',
    name: 'Spotkanie 1',
    date: '2025-06-05',
    description: 'Spotkanie otwierające dla Sopotu',
  },
];
