import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
    selector: 'app-basic-layout',
    templateUrl: './basic-layout.component.html',
    styleUrls: ['./basic-layout.component.less']
})
export class BasicLayoutComponent implements OnInit {
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

    currentUser = {
        avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
        name: '皮皮瞎',
        notifyCount: 12,
        userid: '00000001'
    };

    constructor(private message: NzMessageService) {}

    ngOnInit() {}
    handleNoticeClear(type: string) {
        this.message.success(`清空了${type}`);
        // this.$store.dispatch("header/clearNotices", { type });
    }
    handleMenuCollapse({ collapsed }) {
        console.log(collapsed);
        this.collapsed = collapsed;
    }
    handleMenuClick({ key }) {
        console.log(key);
        if (key === 'triggerError') {
            // this.$router.push("/exception/trigger");
            return;
        }
        if (key === 'logout') {
            // this.$router.push("/user/login");
        }
    }
}
