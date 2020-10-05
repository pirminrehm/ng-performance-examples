import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { html5Colors } from '../components/card/html5-colors';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  color$ = new Subject<string>();
  colorWithChangeDetection$ = new Subject<string>();

  constructor() {}

  updateColor(): void {
    this.color$.next(this.getColor());
  }

  updateColorWithChangeDetection(): void {
    this.colorWithChangeDetection$.next(this.getColor());
  }

  private getColor(): string {
    return html5Colors[Math.floor(Math.random() * (html5Colors.length - 1))];
  }
}
