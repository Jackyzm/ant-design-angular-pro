import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-trend',
    templateUrl: './trend.component.html',
    styleUrls: ['./trend.component.less']
})
export class TrendComponent implements OnInit {
    @Input() colorful = true;
    @Input() reverseColor = false;
    @Input() flag: string;
    @Input() trendStyle: object;
    @Input() className = '';

    @Input() number: TemplateRef<any>;
    constructor() {}

    ngOnInit() {}
}
