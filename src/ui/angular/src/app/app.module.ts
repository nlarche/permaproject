import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VegetablesComponent } from './component/vegetables/vegetables.component';
import { VegetableFormComponent } from './component/vegetable-form/vegetable-form.component';
import { FormsModule } from '@angular/forms';
import { VegetableItemComponent } from './component/vegetable-item/vegetable-item.component';

@NgModule({
  declarations: [AppComponent, VegetablesComponent, VegetableFormComponent, VegetableItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
