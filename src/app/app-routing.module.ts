import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './routes/user/login/login.component';
// import { BasiclayoutComponent } from '@app/layouts/basiclayout/basiclayout.component';

const routes: Routes = [
    {
        path: 'user',
        component: LoginComponent,
        children: [{ path: 'login', component: LoginComponent }]
    },
    {
        path: 'routes',
        loadChildren: './routes/routes.module#RoutesModule'
    },
    {
        path: '',
        redirectTo: '/dashboard/analysis',
        pathMatch: 'full'
    },
    { path: '**', redirectTo: '/dashboard/analysis' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
