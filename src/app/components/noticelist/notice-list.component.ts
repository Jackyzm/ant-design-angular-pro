import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-notice-list',
    templateUrl: './notice-list.component.html',
    styleUrls: ['./notice-list.component.less']
})
export class NoticeListComponent implements OnInit {
    @Input() data: Array<object>;
    @Input() title: string;
    @Input() locale: object;
    @Input() emptyImage: string;
    @Input() emptyText: string;

    @Output() clear: EventEmitter<any> = new EventEmitter();
    @Output() itemClick: EventEmitter<any> = new EventEmitter();

    // (clear)="onClear($event)"
    // (itemClick)="onItemClick($event, item)"

    constructor() {}

    ngOnInit() {}

    onClear() {
        this.clear.emit();
    }
    getColor(status) {
        let color = '';
        switch (status) {
            case 'todo':
                break;
            case 'processing':
                color = 'blue';
                break;
            case 'urgent':
                color = 'red';
                break;
            case 'doing':
                color = 'gold';
                break;
            default:
                return;
        }
        return color;
    }
    onClick(item) {
        this.itemClick.emit(item);
    }
}
