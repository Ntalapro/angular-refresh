import { Component } from '@angular/core';
import { Applicant, ApplicantStatus } from '../applicant.model';

/**
 * SMART ("container") component:
 * - owns the state (later: gets it from a service / store)
 * - handles the events the presentational children emit
 * - passes data down via property bindings
 */
@Component({
  selector: 'app-onboarding-page',
  templateUrl: './onboarding-page.component.html',
})
export class OnboardingPageComponent {
  applicants: Applicant[] = [
    { id: 1, businessName: 'Thabo Trading', registrationNumber: '2019/123456/07', status: 'pending' },
    { id: 2, businessName: 'Mzansi Logistics', registrationNumber: '2021/654321/07', status: 'pending' },
    { id: 3, businessName: 'Kasi Kitchens', registrationNumber: '2018/111222/07', status: 'approved' },
  ];

  selectedId: number | null = null;

  get selectedApplicant(): Applicant | null {
    return this.applicants.find((a) => a.id === this.selectedId) ?? null;
  }

  onSelected(id: number): void {
    this.selectedId = id;
  }

  onApproved(id: number): void {
    this.setStatus(id, 'approved');
  }

  onRejected(id: number): void {
    this.setStatus(id, 'rejected');
  }

  /**
   * Immutable update: we replace the array and the changed object rather
   * than mutating in place. This habit is what makes OnPush change
   * detection (Lesson 4) and NgRx reducers work correctly.
   */
  private setStatus(id: number, status: ApplicantStatus): void {
    this.applicants = this.applicants.map((a) => (a.id === id ? { ...a, status } : a));
  }
}
