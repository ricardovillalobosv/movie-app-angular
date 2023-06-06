import { Component, Input } from '@angular/core';
import { Cast } from 'src/app/commons/cats';

@Component({
  selector: 'app-avatar-card',
  templateUrl: './avatar-card.component.html',
  styleUrls: ['./avatar-card.component.scss']
})
export class AvatarCardComponent {
 @Input() cast: Cast = {};
}
