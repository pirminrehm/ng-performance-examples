import { AfterViewInit, ChangeDetectorRef, Component, NgZone, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, delay, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-cd-counter',
  templateUrl: './cd-counter.component.html',
  styleUrls: ['./cd-counter.component.scss'],
})
export class CdCounterComponent implements AfterViewInit, OnDestroy {
  cdCycles = 0;
  cdStatusUpdate$ = new Subject();
  destroyed$ = new Subject();

  get cdStatusGetter(): string {
    ++this.cdCycles;
    this.zone.runOutsideAngular(() => {
      this.cdStatusUpdate$.next();
    });
    return '';
  }
  constructor(private cdr: ChangeDetectorRef, private zone: NgZone) {}

  ngAfterViewInit(): void {
    const cdrCounter = document.getElementById('cdr-counter');
    const cdrWrapper = document.getElementById('cdr-wrapper');
    this.cdStatusUpdate$
      .pipe(
        debounceTime(100),
        tap(() => {
          cdrWrapper.classList.add('active');
          cdrCounter.textContent = this.cdCycles + '';
        }),
        delay(100),
        takeUntil(this.destroyed$),
      )
      .subscribe(() => {
        cdrWrapper.classList.remove('active');
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
