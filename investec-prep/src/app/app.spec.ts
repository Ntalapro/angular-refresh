import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Investec Prep');
  });

  it('should increment the count and update the computed double', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    const incrementButton = compiled.querySelector('button') as HTMLButtonElement;
    incrementButton.click();
    incrementButton.click();
    await fixture.whenStable();

    expect(compiled.textContent).toContain('Counter value: 2');
    expect(compiled.textContent).toContain('Double (computed): 4');
  });
});
