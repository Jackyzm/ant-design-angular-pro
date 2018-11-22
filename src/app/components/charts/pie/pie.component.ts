import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import { cloneDeep } from 'lodash';

@Component({
    selector: 'app-pie',
    templateUrl: './pie.component.html',
    styleUrls: ['./pie.component.less']
})
export class PieComponent implements OnInit, OnChanges {
    constructor() {}

    @Input() className = '';
    @Input() colors = [];
    @Input() hasLegend = false;
    @Input() legendBlock = false;
    @Input() data = [];
    @Input() pieStyle = {};
    @Input() subTitle = '';
    @Input() total = '';
    @Input() height = 0;
    @Input() valueFormat;

    chartData: any = {};
    legendData = [];

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.data) {
            this.setLegendData();
        }
    }

    handleLegendClick(item, index) {
        let checkedItem = 0;
        this.legendData.map(val => {
            if (val.checked) {
                checkedItem += 1;
            }
        });
        if (checkedItem > 2 || item.checked === false) {
            if (!this.legendData[index].checked) {
                // this.chartData.rows[index].y = this.data[index].y;
            } else {
                // this.chartData.rows[index].y = 0;
            }
            this.legendData[index].checked = !this.legendData[index].checked;
        } else {
            return;
        }
    }
    // setChartData() {
    //     this.chartData = {
    //         columns: ['x', 'y'],
    //         rows: cloneDeep(this.data)
    //     };
    // }
    setLegendData() {
        if (this.data.length === 0) {
            return [];
        }
        const arr = cloneDeep(this.data);
        const total = arr.reduce((pre, now) => now.y + pre, 0);
        this.legendData = arr.map((item, index) => {
            item.checked = true;
            item.color = this.colors[index];
            item.percent = item.y / total;
            return item;
        });
    }
    isNaN(val) {
        return isNaN(val);
    }
}
