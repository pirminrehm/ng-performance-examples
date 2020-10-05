import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cds-default',
  templateUrl: './cds-default.component.html',
  styleUrls: ['./cds-default.component.scss'],
})
export class CdsDefaultComponent implements OnInit {
  cardIndexes = [];

  constructor() {}

  ngOnInit(): void {
    this.addCards();
  }

  addCards(): void {
    this.cardIndexes.push(...new Array(1000).fill(undefined).map((v, i) => i + this.cardIndexes.length));
  }
}
