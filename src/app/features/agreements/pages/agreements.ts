import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {SelectionService} from '../../../core/services/selection.service';
import {AgreementsApiService} from '../services/agreements-api.service';
import { AgreementsUiService } from '../services/agreements-ui.service';
import {Plot} from '../../../models/plot';
import {Meeting} from '../../../models/meeting';


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
  form: FormGroup;
  isEditMode = false;
  private sub?: Subscription;
  isCreating = false;

  constructor(
    private selection: SelectionService,
    private agreementsSvc: AgreementsApiService,
    public agreementsUi: AgreementsUiService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      employee: [{value: 'Miłosz Sierakowski', disabled: true}],
      client: [{value: '', disabled: true}],
      date: [{value: '', disabled: true}],
      description: [{value: '', disabled: true}],
    });
  }


  ngOnInit(): void {
    this.sub = this.selection.getSelectedPlot$().subscribe((plot: Plot | null) => {
      this.selectedPlot = plot;
      const selectedPlotID = this.selectedPlot ? this.selectedPlot.id : null;
      this.selectedMeeting = null;
      this.meetings = [];
      this.form.disable();
      this.isCreating = false;
      this.isEditMode = false;

      if (selectedPlotID !== null) {
        this.meetings = this.agreementsSvc.getMeetings(selectedPlotID);
        this.form.patchValue({
          client: plot?.client || '',
          date: '',
          description: ''
        });
      }


    });

    this.agreementsUi.startCreating$.subscribe(() => {
      this.isCreating = true;
      this.isEditMode = false;
      console.log('Tworzenie:', this.isCreating);
      console.log('Edycja:', this.isEditMode);


      this.form.patchValue({
        client: this.selectedPlot?.client ?? '',
        date: '',
        description: ''
      });

      this.form.enable();
    });
  }


  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }


  onClickRow(m: Meeting): void {
    this.selectedMeeting = m;
    this.isEditMode = true;


    this.form.patchValue({
      client: this.selectedPlot?.client || '',
      date: m.date,
      description: m.description
    });


    this.form.get('date')?.enable();
    this.form.get('description')?.enable();
  }


  pad(n: number | string): string {
    const num = typeof n === 'string' ? parseInt(n, 10) : n;
    return String(num).padStart(2, '0');
  }

  saveMeeting() {

  }

  deleteMeeting(): void {
    // Tu będzie modal i logika usuwania
  }
}
