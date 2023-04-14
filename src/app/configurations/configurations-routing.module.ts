import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationsComponent } from './configurations.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: 'configurations', component: ConfigurationsComponent, data : { name: 'Congigurações'} }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class ConfigurationsRoutingModule { }
