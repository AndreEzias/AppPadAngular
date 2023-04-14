import { NgModule } from '@angular/core';
import { ConfigurationsComponent } from './configurations.component';
import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConfigurationsComponent
  ],
  imports: [
    ConfigurationsRoutingModule,
    FormsModule
  ],
  exports: [
    ConfigurationsComponent
  ]
})

export class ConfigurationsModule { }
