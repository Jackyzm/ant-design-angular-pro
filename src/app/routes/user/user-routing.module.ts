import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlayoutComponent } from '@layouts/userlayout/userlayout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        component: UserlayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/user/login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
