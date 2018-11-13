import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div id="root"><router-outlet></router-outlet></div>`,
})
export class AppComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
