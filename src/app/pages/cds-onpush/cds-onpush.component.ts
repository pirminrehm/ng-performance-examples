import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cds-onpush',
  templateUrl: './cds-onpush.component.html',
  styleUrls: ['./cds-onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CdsOnpushComponent implements OnInit {
  cardIndexes = [];

  constructor() {}

  ngOnInit(): void {
    this.addCards();
  }

  addCards(): void {
    this.cardIndexes.push(...new Array(1000).fill(undefined).map((v, i) => i + this.cardIndexes.length));
  }
}
