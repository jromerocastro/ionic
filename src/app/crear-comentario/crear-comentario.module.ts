import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CrearComentarioPageRoutingModule } from './crear-comentario-routing.module';

import { CrearComentarioPage } from './crear-comentario.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearComentarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CrearComentarioPage]
})
export class CrearComentarioPageModule {}
