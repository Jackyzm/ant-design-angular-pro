import { Component, OnInit } from '@angular/core';
import { yuan } from '@components/charts';
import numeral from 'numeral';
@Component({
    selector: 'app-analysis',
    templateUrl: './analysis.component.html',
    styleUrls: ['./analysis.component.less']
})
export class AnalysisComponent implements OnInit {
    constructor() {}

    topColResponsiveProps = {
        nzXs: 24,
        nzSm: 12,
        nzMd: 12,
        nzLg: 12,
        nzXl: 6,
        style: 'margin-bottom: 24px;'
    };
    yuan = yuan;
    numeral = numeral;
    ngOnInit() {}
}
