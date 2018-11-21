import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.less']
})
export class BarComponent implements OnChanges {
    @Input() data: Array<object> = [{}];
    @Input() height = 0;
    @Input() color = '#1890FF';
    @Input() title = '';

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
                top: 20,
                bottom: 40,
                right: 10,
                left: 50
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        width: 1,
                        type: 'dashed',
                        opacity: 0.5
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                }
            },
            xAxis: {
                show: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#ccc'
                    }
                },
                axisTick: {
                    show: true,
                    alignWithLabel: true
                },
                axisLabel: {
                    show: true,
                    color: '#444'
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
