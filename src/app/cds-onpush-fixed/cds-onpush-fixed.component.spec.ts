import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdsOnpushFixedComponent } from './cds-onpush-fixed.component';

describe('CdsOnpushFixedComponent', () => {
  let component: CdsOnpushFixedComponent;
  let fixture: ComponentFixture<CdsOnpushFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CdsOnpushFixedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdsOnpushFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
