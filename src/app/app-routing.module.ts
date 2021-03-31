import { PowerCyrcleDiagramComponent } from './labs/power-cyrcle-diagram/power-cyrcle-diagram.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'labs/1', component: PowerCyrcleDiagramComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
