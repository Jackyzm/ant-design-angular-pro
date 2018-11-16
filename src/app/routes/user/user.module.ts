import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { UserLayoutComponent } from '@app/layouts/userlayout/user-layout.component';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
    declarations: [UserLayoutComponent, LoginComponent],
    imports: [UserRoutingModule]
})
export class UserModule {}
