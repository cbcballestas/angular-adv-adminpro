import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  progreso1 = 15;
  progreso2 = 15;

  get porcentaje1(): string {
    return `${this.progreso1}%`;
  }
  get porcentaje2(): string {
    return `${this.progreso2}%`;
  }
}
