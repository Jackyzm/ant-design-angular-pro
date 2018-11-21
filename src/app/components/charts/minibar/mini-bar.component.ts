import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
    selector: 'app-mini-bar',
    templateUrl: './mini-bar.component.html'
})
export class MiniBarComponent implements OnChanges {
    @Input() data: Array<object> = [{}];
    @Input() height = 46;
    @Input() color = '#1890FF';
    @Input() forceFit = true;
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
                top: 10,
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
                type: 'bar',
                data: this.data.map((item: { y }) => item.y),
                itemStyle: {
                    color: this.color
                },
                barMaxWidth: '50%'
            }
        };
    }
}
