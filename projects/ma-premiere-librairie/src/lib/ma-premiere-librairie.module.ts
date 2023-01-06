import { NgModule } from '@angular/core';
import { MaPremiereLibrairieComponent } from './ma-premiere-librairie.component';
import { MonPremierComposantComponent } from './mon-premier-composant/mon-premier-composant.component';



@NgModule({
  declarations: [
    MaPremiereLibrairieComponent,
    MonPremierComposantComponent
  ],
  imports: [
  ],
  exports: [
    MaPremiereLibrairieComponent,
    MonPremierComposantComponent
  ]
})
export class MaPremiereLibrairieModule { }
