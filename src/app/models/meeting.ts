export interface Meeting {
  id: number;            // unikalny numer spotkania
  plotId: string | number; // ID działki, do której należy
  name: string;          // np. "Spotkanie 1"
  date: string;          // np. "2025-06-01" (ISO string)
  description: string;   // opis ustaleń
  client: string;        // nazwa klienta
}
