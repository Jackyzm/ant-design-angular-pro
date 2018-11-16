import { Component, OnInit } from '@angular/core';
import * as zh_cn from 'date-fns/locale/zh_cn';

@Component({
    selector: 'app-root',
    template: `
        <div id="root"><router-outlet></router-outlet></div>
    `,
    styles: ['#root { height: 100%; }']
})
export class AppComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        (window as any).fnsLocale = zh_cn;
    }
}
