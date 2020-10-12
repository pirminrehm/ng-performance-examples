import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdCyclesComponent } from './cd-cycles.component';

describe('CdCyclesComponent', () => {
  let component: CdCyclesComponent;
  let fixture: ComponentFixture<CdCyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdCyclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
