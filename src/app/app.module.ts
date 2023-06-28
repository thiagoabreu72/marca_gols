import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { JogadorComponent } from './jogador/jogador.component';
import { BotoesComponent } from './botoes/botoes.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    JogadorComponent,
    BotoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
