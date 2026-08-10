import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingPageComponent } from './onboarding-page/onboarding-page.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { ApplicantCardComponent } from './applicant-card/applicant-card.component';

/**
 * Feature module. Note the mechanics (this IS the answer to quiz Q2):
 * - declarations: components that BELONG to this module (one module only!)
 * - imports: CommonModule gives our templates *ngIf / *ngFor
 * - exports: only what other modules are allowed to use; the list and card
 *   stay private to this feature.
 */
@NgModule({
  declarations: [OnboardingPageComponent, ApplicantListComponent, ApplicantCardComponent],
  imports: [CommonModule],
  exports: [OnboardingPageComponent],
})
export class OnboardingModule {}
