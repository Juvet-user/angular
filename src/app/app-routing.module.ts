import { CookiesComponent } from './cookies/cookies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:"**", redirectTo:"cookies"},
  {path:"/", redirectTo:"cookies", pathMatch:"full"},
  {path:"cookies", component: CookiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
