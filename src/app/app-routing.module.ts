import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';

const routes: Routes = [
  {path:'addrestaurant',component:AddrestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
