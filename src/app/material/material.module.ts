import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
})
export class MaterialModule { }
