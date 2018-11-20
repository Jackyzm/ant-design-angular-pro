import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { SharedModule } from './routes/shared.module';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { BasicLayoutComponent } from '@layouts/basiclayout/basic-layout.component';
import { GlobalFooterComponent } from './components/globalfooter/global-footer.component';
import { GlobalHeaderComponent } from './components/globalheader/global-header.component';
import { HeaderSearchComponent } from './components/headersearch/header-search.component';
import { NoticeIconComponent } from './components/noticeicon/notice-icon.component';
import { NoticeListComponent } from './components/noticelist/notice-list.component';
import { SiderMenuComponent } from './components/sidermenu/sider-menu.component';
import { ThreeMenuComponent } from './components/threemenu/three-menu.component';

registerLocaleData(zh);

@NgModule({
    declarations: [
        AppComponent,
        BasicLayoutComponent,
        GlobalFooterComponent,
        GlobalHeaderComponent,
        HeaderSearchComponent,
        NoticeIconComponent,
        NoticeListComponent,
        SiderMenuComponent,
        ThreeMenuComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        // 路由
        AppRoutingModule,
        SharedModule
    ],
    /** 配置 ng-zorro-antd 国际化 **/
    providers: [{ provide: NZ_I18N, useValue: zh_CN }],
    bootstrap: [AppComponent]
})
export class AppModule {}
