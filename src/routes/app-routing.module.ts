import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalysisComponent } from './deshboard/analysis/analysis.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {
    path: 'user/login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/dashboard/analysis',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'dashboard/analysis',
        component: AnalysisComponent
      }
    ]
  },
  { path: '**', redirectTo: '/dashboard/analysis' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
