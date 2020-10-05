import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-profiler',
  templateUrl: './profiler.component.html',
  styleUrls: ['./profiler.component.scss'],
})
export class ProfilerComponent implements AfterViewInit {
  msPerTick = '---';
  numTicks = '---';

  constructor() {}
  ngAfterViewInit(): void {
    this.runProfiler();
  }

  runProfiler(): void {
    try {
      const measure = (window as any).ng.profiler.timeChangeDetection();
      this.numTicks = measure.numTicks;
      this.msPerTick = measure.msPerTick.toFixed(4);
    } catch (e) {
      setTimeout(() => {
        this.runProfiler();
      }, 200);
    }
  }
}
