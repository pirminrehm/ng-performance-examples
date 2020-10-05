import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColorService } from 'src/app/services/color.service';
import { html5Colors } from '../card/html5-colors';

@Component({
  selector: 'app-card-onpush',
  templateUrl: './card-onpush.component.html',
  styleUrls: ['./card-onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardOnpushComponent implements OnDestroy, OnInit {
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
