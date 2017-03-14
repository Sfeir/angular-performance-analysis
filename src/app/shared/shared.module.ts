import { MaterialModule } from '@angular/material';
import { NgModule, InjectionToken } from '@angular/core';

import { PeopleService } from './people.service';
import { CardComponent } from './card/card.component';
import { CommonModule } from "@angular/common";
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule,MaterialModule],
  exports: [CardComponent, HeaderComponent],
  declarations: [CardComponent, HeaderComponent],
  providers: [
    PeopleService
  ],
})
export class SharedModule { }
