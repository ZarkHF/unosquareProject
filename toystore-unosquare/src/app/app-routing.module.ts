import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GametoysComponent } from './containers/gametoys/gametoys.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'GameToys'},
  { path: 'GameToys', component: GametoysComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
