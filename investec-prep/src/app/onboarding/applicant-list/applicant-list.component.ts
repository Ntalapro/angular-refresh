import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Applicant } from '../applicant.model';

/**
 * PRESENTATIONAL ("dumb") component:
 * - receives everything it needs via @Input
 * - reports everything that happens via @Output
 * - no services injected, no knowledge of where data comes from
 * => trivially reusable and trivially testable.
 */
@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
})
export class ApplicantListComponent {
  @Input({ required: true }) applicants: Applicant[] = [];
  @Input() selectedId: number | null = null;

  @Output() selected = new EventEmitter<number>();

  trackById(_index: number, applicant: Applicant): number {
    return applicant.id;
  }
}
