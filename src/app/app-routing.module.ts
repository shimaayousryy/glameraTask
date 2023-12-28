import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'login', loadChildren: () => import('./features/login.module')
          .then((m) => m.LoginModule)
    },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
