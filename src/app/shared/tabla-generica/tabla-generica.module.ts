import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared.module';
import { TablaGenericaComponent } from './tabla-generica.component';

@NgModule({
  declarations: [TablaGenericaComponent],
  imports: [SharedModule, MatCardModule, MatTableModule ],
  exports: [TablaGenericaComponent]
})
export class TablaGenericaModule { }
