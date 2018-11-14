import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicLayoutComponent } from '@app/layouts/basiclayout/basic-layout.component';

const routes: Routes = [
    {
        path: '',
        component: BasicLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/dashboard/analysis',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                redirectTo: '/dashboard/analysis',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren:
                    './routes/dashboard/dashboard.module#DashboardModule'
            }
        ]
    },
    {
        path: 'user',
        loadChildren: './routes/user/user.module#UserModule'
    },
    { path: '**', redirectTo: '/dashboard/analysis' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
