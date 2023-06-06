import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { QualificationModule } from '../qualification/qualification.module';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, QualificationModule],
  exports: [CardComponent],
})
export class CardModule {}
