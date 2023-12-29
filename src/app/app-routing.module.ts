import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path :'' , component:LoginComponent ,
    children: [
      {
        path: 'login', loadChildren: () => import('./features/auth.module')
            .then((m) => m.AuthModule)
      },
      {
        path: 'business', loadChildren: () => import('./features/auth.module')
            .then((m) => m.AuthModule)
      },
    ]
    },
    
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
