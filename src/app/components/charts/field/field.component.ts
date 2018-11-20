import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.less']
})
export class FieldComponent implements OnInit {
    @Input() style: string;
    @Input() label: string;
    @Input() value: string;

    constructor() {}

    ngOnInit() {}
}
