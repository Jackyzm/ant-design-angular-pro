import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { getMenuData } from '../menu';
import { BasicLayoutService } from './basic-layout.service';

class CurrentUser {
    avatar: string;
    name: string;
    notifyCount: number;
    userid: string;
}
@Component({
    selector: 'app-basic-layout',
    templateUrl: './basic-layout.component.html',
    providers: [BasicLayoutService]
})
export class BasicLayoutComponent implements OnInit {
    constructor(
        private router: Router,
        private message: NzMessageService,
        private basicLayoutService: BasicLayoutService
    ) {}

    links = [
        {
            key: 'Pro 首页',
            title: 'Pro 首页',
            href: 'https://github.com/Jackyzm/ng-cli-app',
            blankTarget: true
        },
        {
            key: 'github',
            title: 'github',
            href: 'https://github.com/Jackyzm/ng-cli-app',
            blankTarget: true
        },
        {
            key: 'NG-ZORRO',
            title: 'NG-ZORRO',
            href: 'https://ng.ant.design/docs/introduce/zh',
            blankTarget: true
        }
    ];

    collapsed = false;
    fetchingNotices = true;
    currentUser: CurrentUser = {
        avatar: '',
        name: '',
        notifyCount: 0,
        userid: ''
    };
    MenuData = getMenuData();
    notices: Array<object> = [{}];

    isCollapsed = false;
    logo = './assets/logo.svg';

    ngOnInit() {
        this.getNotices();
        this.getCurrentUser();
    }
    handleNoticeClear(type: string) {
        this.message.success(`清空了${type}`);

        const newList = this.notices.filter(
            (item: { type }) => item.type !== type
        );
        this.notices = newList;
        if (this.currentUser && this.currentUser.notifyCount) {
            this.currentUser.notifyCount = newList.length;
        }
    }
    handleMenuCollapse({ collapsed }) {
        this.collapsed = collapsed;
    }
    handleMenuClick({ key }) {
        if (key === 'triggerError') {
            this.router.navigateByUrl('/exception/trigger');
            return;
        }
        if (key === 'logout') {
            this.router.navigateByUrl('/user/login');
        }
    }
    handleNoticeVisibleChange(visible) {
        if (visible) {
            this.fetchingNotices = true;
            setTimeout(() => {
                this.fetchingNotices = false;
            }, 1000);
        }
    }
    getNotices() {
        return this.basicLayoutService
            .getNotices()
            .subscribe((data: Array<object>) => {
                this.notices = data;
            });
    }
    getCurrentUser() {
        return this.basicLayoutService
            .getCurrentUser()
            .subscribe((data: CurrentUser) => {
                this.currentUser = data;
            });
    }
}
