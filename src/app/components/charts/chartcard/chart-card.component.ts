import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-chart-card',
    templateUrl: './chart-card.component.html',
    styleUrls: ['./chart-card.component.less']
})
export class ChartCardComponent implements OnInit {
    @Input() bordered: boolean;
    @Input() loading: boolean;
    @Input() title: string;
    @Input() contentHeight: number;
    @Input() avatar: boolean;

    @Input() action: TemplateRef<any>;
    @Input() total: TemplateRef<any>;
    @Input() content: TemplateRef<any>;
    @Input() footer: TemplateRef<any>;
    constructor() {}

    ngOnInit() {}
}
