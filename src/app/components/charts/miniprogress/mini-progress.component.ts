import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-mini-progress',
    templateUrl: './mini-progress.component.html',
    styleUrls: ['./mini-progress.component.less']
})
export class MiniProgressComponent implements OnInit {
    @Input() target = 0;
    @Input() color = '';
    @Input() strokeWidth = 0;
    @Input() percent = 0;

    constructor() {}

    ngOnInit() {}
}
