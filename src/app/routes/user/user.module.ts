import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { UserlayoutComponent } from '@layouts/userlayout/userlayout.component';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
    declarations: [UserlayoutComponent, LoginComponent],
    imports: [UserRoutingModule]
})
export class UserModule {}
