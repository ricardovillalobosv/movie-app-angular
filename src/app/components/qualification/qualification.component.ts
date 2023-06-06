import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent {
  @Input() qualification: number = 0;
  @Input() colorBack: boolean = false;
  @Input() size: string = '16px'
}
