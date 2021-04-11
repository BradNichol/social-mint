import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InstaAuthComponent } from './insta-auth/insta-auth.component'

const routes: Routes = [
    {path: 'insta-auth', component: InstaAuthComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
