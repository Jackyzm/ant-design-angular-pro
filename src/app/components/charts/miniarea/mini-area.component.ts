import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
    selector: 'app-mini-area',
    templateUrl: './mini-area.component.html'
})
export class MiniAreaComponent implements OnChanges {
    @Input() color = '#1890FF';
    @Input() data: Array<object> = [{}];
    @Input() height = 54;
    constructor() {}

    chartOption: EChartOption = {};

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.data) {
            this.setOption();
        }
    }
    setOption() {
        this.chartOption = {
            grid: {
                right: 0,
                top: 20,
                bottom: 50,
                left: 0
            },
            legend: {
                show: false
            },
            yAxis: {
                show: false,
                axisLabel: {
                    show: false
                }
            },
            xAxis: {
                show: false,
                axisLabel: {
                    show: false
                },
                data: this.data.map((item: { x }) => item.x)
            },
            tooltip: {
                show: true,
                trigger: 'axis',
                formatter: function(params, ticket, callback) {
                    return `${params[0].marker} ${params[0].name}: ${
                        params[0].value
                    }`;
                }
            },
            series: {
                type: 'line',
                data: this.data.map((item: { y }) => item.y),
                symbol: 'circle',
                symbolSize: 2,
                showSymbol: false,
                smooth: true,
                lineStyle: {
                    color: this.color
                },
                areaStyle: {
                    color: this.color
                },
                itemStyle: {
                    color: this.color
                }
            }
        };
    }
}
