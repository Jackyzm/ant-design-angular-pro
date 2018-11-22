import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DefaultInterceptor } from '@core/default.interceptor';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        NgZorroAntdModule
    ],
    declarations: [
        // your components
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        NgZorroAntdModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: DefaultInterceptor,
            multi: true
        }
    ]
})
export class SharedModule {}
