import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdsDefaultComponent } from './cds-default.component';

describe('CdsDefaultComponent', () => {
  let component: CdsDefaultComponent;
  let fixture: ComponentFixture<CdsDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CdsDefaultComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdsDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
