import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdsOnpushComponent } from './cds-onpush.component';

describe('CdsOnpushComponent', () => {
  let component: CdsOnpushComponent;
  let fixture: ComponentFixture<CdsOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CdsOnpushComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdsOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
