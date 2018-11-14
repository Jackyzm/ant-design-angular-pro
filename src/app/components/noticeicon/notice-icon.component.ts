import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-notice-icon',
    templateUrl: './notice-icon.component.html',
    styleUrls: ['./notice-icon.component.less']
})
export class NoticeIconComponent implements OnInit {
    count = 5;
    className = '';
    constructor() {}

    ngOnInit() {}
    onPopupVisibleChange(): void {
        console.log('onPopupVisibleChange');
    }
}
