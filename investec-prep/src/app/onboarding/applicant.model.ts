export type ApplicantStatus = 'pending' | 'approved' | 'rejected';

export interface Applicant {
  id: number;
  businessName: string;
  registrationNumber: string;
  status: ApplicantStatus;
}
