import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WClockComponent } from './w-clock/w-clock.component';
import { WMatTimePickerComponent } from './w-mat-timepicker/w-mat-timepicker.component';
import { WTimeDialogComponent } from './w-time-dialog/w-time-dialog.component';
import { WTimeComponent } from './w-time/w-time.component';

@NgModule({
  declarations: [WMatTimePickerComponent, WTimeDialogComponent, WClockComponent, WTimeComponent],
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    CommonModule,
    FlexLayoutModule
  ],
  exports: [WMatTimePickerComponent, WTimeDialogComponent, WClockComponent, WTimeComponent],
  entryComponents: [WMatTimePickerComponent, WTimeDialogComponent, WClockComponent, WTimeComponent]
})
export class MaterialTimeControlModule {}
