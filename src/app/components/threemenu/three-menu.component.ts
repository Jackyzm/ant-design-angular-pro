import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-three-menu',
    templateUrl: './three-menu.component.html'
})
export class ThreeMenuComponent implements OnInit {
    // @Input() menuData: Array<object> | object;
    @Input() menuData: any;
    @Input() openKeys: Array<string>;
    @Input() selectedKey: string;
    @Input() collapsed: boolean;

    @Output() openChange: EventEmitter<any> = new EventEmitter();
    constructor() {}

    ngOnInit() {
        // console.log(this.openKeys);
    }

    onOpenChange(status, menuData) {
        this.openChange.emit({ status, item: menuData });
    }
}
