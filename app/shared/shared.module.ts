import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { starcomponent } from './star.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [starcomponent],
  exports: [FormsModule, CommonModule, starcomponent]
})
export class SharedModule { }
