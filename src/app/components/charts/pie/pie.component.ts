import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { cloneDeep } from 'lodash';
import { EChartOption } from 'echarts';

@Component({
    selector: 'app-pie',
    templateUrl: './pie.component.html',
    styleUrls: ['./pie.component.less']
})
export class PieComponent implements OnChanges {
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

    private _data = [];
    private legendData = [];

    chartOption: EChartOption = {};

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.data) {
            this.setLegendData();
            this.setOption(this.data);
            this._data = cloneDeep(this.data);
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
                this._data[index].y = this.data[index].y;
            } else {
                this._data[index].y = 0;
            }
            this.setOption(this._data);
            this.legendData[index].checked = !this.legendData[index].checked;
        } else {
            return;
        }
    }

    setOption(data) {
        this.chartOption = {
            grid: {},
            legend: {
                show: false
            },
            tooltip: {
                formatter: function(params, ticket, callback) {
                    return `${params.marker} ${params.name}: ${params.value}`;
                }
            },
            series: {
                type: 'pie',
                color: this.colors,
                label: {
                    show: false
                },
                radius: ['76%', '100%'],
                hoverAnimation: false,
                center: ['50%', '50%'],
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 4
                },
                data: data.map((item: { x; y }) => {
                    return { name: item.x, value: item.y };
                })
            }
        };
    }

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
