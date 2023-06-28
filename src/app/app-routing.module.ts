import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeComponent } from './time/time.component';
import { JogadorComponent } from './jogador/jogador.component';

const routes: Routes = [{
  path: '', component: TimeComponent
},
{ path: 'jogador', component: JogadorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
