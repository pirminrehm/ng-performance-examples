import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-cds-onpush-problems',
  templateUrl: './cds-onpush-problems.component.html',
  styleUrls: ['./cds-onpush-problems.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdsOnpushProblemsComponent implements OnInit {
  cardNumber = getRand();

  get title(): string {
    console.log('title getter is called in CdsOnpushProblemsComponent');
    return 'OnPush Problems';
  }
  constructor(private cdr: ChangeDetectorRef, public colorService: ColorService) {}

  ngOnInit(): void {}

  runCdr(): void {
    this.cdr.detectChanges();
  }

  changeCardNumber(): void {
    this.cardNumber = getRand();
  }

  changeCardNumberTimeout(): void {
    queueMicrotask(() => {
      this.cardNumber = getRand();
      document.getElementById('timeout-number').textContent = this.cardNumber + '';
    });
  }
}

function getRand(): number {
  return Math.floor(Math.random() * 1000);
}
