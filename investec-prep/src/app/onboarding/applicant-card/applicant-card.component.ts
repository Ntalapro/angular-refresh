import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Applicant } from '../applicant.model';

/**
 * Presentational component demonstrating:
 * - a required @Input (Angular 16 feature)
 * - multiple @Outputs
 * - content projection via <ng-content> (see template)
 */
@Component({
  selector: 'app-applicant-card',
  templateUrl: './applicant-card.component.html',
})
export class ApplicantCardComponent {
  @Input({ required: true }) applicant!: Applicant;

  @Output() approved = new EventEmitter<number>();
  @Output() rejected = new EventEmitter<number>();
}
