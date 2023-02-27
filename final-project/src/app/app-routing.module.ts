
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './app-pages/main/main.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: 'working-group/:id', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
