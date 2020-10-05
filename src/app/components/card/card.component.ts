import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColorService } from 'src/app/services/color.service';
import { html5Colors } from './html5-colors';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() cardIndex: number;
  destroyed$ = new Subject();
  colorCode = html5Colors[Math.floor(Math.random() * (html5Colors.length - 1))];

  constructor(private colorServcie: ColorService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.colorServcie.color$.pipe(takeUntil(this.destroyed$)).subscribe((color) => {
      this.colorCode = color;
    });

    this.colorServcie.colorWithChangeDetection$.pipe(takeUntil(this.destroyed$)).subscribe((color) => {
      this.colorCode = color;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
