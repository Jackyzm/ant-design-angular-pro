import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-global-header',
    templateUrl: './global-header.component.html',
    styleUrls: ['./global-header.component.less']
})
export class GlobalHeaderComponent implements OnInit {
    @Input() collapsed: boolean;
    @Input() currentUser: { name: string; avatar: string; notifyCount: number };
    // tslint: disable-next-line
    @Output() collapse: EventEmitter<any> = new EventEmitter();
    @Output() menuClick: EventEmitter<any> = new EventEmitter();

    dataSource = ['搜索提示一', '搜索提示二', '搜索提示三'];

    constructor() {}

    ngOnInit() {
        console.log(this);
    }

    toggle() {
        this.collapse.emit({ collapsed: !this.collapsed });
    }

    onSearch(option) {
        console.log(option);
    }

    onMenuClick($event) {
        this.menuClick.emit({
            key:
                $event.hostElement.nativeElement.attributes.key &&
                $event.hostElement.nativeElement.attributes.key.value
        });
    }
}
