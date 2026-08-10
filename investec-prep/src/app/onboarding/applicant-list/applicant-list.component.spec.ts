import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicantListComponent } from './applicant-list.component';
import { Applicant } from '../applicant.model';

describe('ApplicantListComponent', () => {
  let fixture: ComponentFixture<ApplicantListComponent>;
  let component: ApplicantListComponent;

  const applicants: Applicant[] = [
    { id: 1, businessName: 'Thabo Trading', registrationNumber: '2019/123456/07', status: 'pending' },
    { id: 2, businessName: 'Mzansi Logistics', registrationNumber: '2021/654321/07', status: 'approved' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicantListComponent],
    });
    fixture = TestBed.createComponent(ApplicantListComponent);
    component = fixture.componentInstance;
  });

  it('renders one row per applicant (input)', () => {
    component.applicants = applicants;
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('li');
    expect(rows.length).toBe(2);
    expect(rows[0].textContent).toContain('Thabo Trading');
  });

  it('emits the applicant id when a row is clicked (output)', () => {
    component.applicants = applicants;
    fixture.detectChanges();

    let emittedId: number | undefined;
    component.selected.subscribe((id: number) => (emittedId = id));

    const secondRowButton = fixture.nativeElement.querySelectorAll('button')[1] as HTMLButtonElement;
    secondRowButton.click();

    expect(emittedId).toBe(2);
  });
});
