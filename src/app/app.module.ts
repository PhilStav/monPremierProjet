import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaPremiereLibrairieModule } from "../../projects/ma-premiere-librairie/src/lib/ma-premiere-librairie.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [
      AppComponent
    ],
    imports: [
        BrowserModule,
        MaPremiereLibrairieModule
    ],
    exports: [
      MaPremiereLibrairieModule
    ]
})
export class AppModule { }
