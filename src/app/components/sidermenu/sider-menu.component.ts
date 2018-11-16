import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { urlToList } from '../_utils/pathTools';

@Component({
    selector: 'app-sider-menu',
    templateUrl: './sider-menu.component.html',
    styleUrls: ['./sider-menu.component.less']
})
export class SiderMenuComponent implements OnInit {
    @Input() logo: string;
    @Input() menuData: Array<object>;
    @Input() collapsed: boolean;
    openKeys = [];
    selectedKey = '';

    constructor(private route: Router) {}

    ngOnInit() {
        console.log(urlToList(this.route.url));

        const pathArr = urlToList(this.route.url);
        if (pathArr[2] && !this.checkPath(pathArr[2])) {
            this.openKeys = [pathArr[0]];
            this.selectedKey = pathArr[1];
            return;
        } else if (pathArr[2]) {
            this.openKeys = [pathArr[0], pathArr[1]];
        } else {
            this.openKeys = [pathArr[0]];
        }
        this.selectedKey = this.route.url;
    }

    onClick(val) {
        console.log(val);
    }

    handleOpenChange({ status, item }) {
        console.log(status, item);
        if (status) {
            this.openKeys = item.path;
        }
    }
    checkPath(url) {
        let status = false;
        const mapData = data => {
            data.map(item => {
                if (item.path === url) {
                    status = true;
                }
                if (item.children) {
                    haveChildren(item.children); // eslint-disable-line
                }
            });
        };
        const haveChildren = arr => {
            mapData(arr);
        };
        mapData(this.menuData);
        return status;
    }
}
