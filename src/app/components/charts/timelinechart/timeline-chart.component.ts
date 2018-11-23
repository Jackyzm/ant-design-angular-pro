import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
    selector: 'app-timeline-chart',
    templateUrl: './timeline-chart.component.html',
    styleUrls: ['./timeline-chart.component.less']
})
export class TimelineChartComponent implements OnInit, OnChanges {
    constructor() {}

    @Input() data = [];
    @Input() legend = [];
    @Input() height = 0;
    @Input() colors = [];
    @Input() title = '';
    @Input() x = '';
    @Input() y = [];

    chartOption: EChartOption = {};

    ngOnInit() {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.data) {
            this.setOption();
        }
    }

    setOption() {
        this.chartOption = {
            grid: {
                // top: 20,
                bottom: 80,
                right: 50,
                left: 60
            },
            legend: {
                data: this.legend
            },
            tooltip: {
                show: true,
                trigger: 'axis'
            },
            dataZoom: {
                type: 'slider',
                start: 0,
                end: 100
            },
            yAxis: {
                show: true,
                axisLine: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        width: 1,
                        type: 'dashed',
                        opacity: 0.5
                    }
                },
                axisTick: {
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
                    color: '#444'
                },
                boundaryGap: false,
                data: this.data.map(item => item[this.x])
            },
            series: this.y.map((val, index) => {
                return {
                    type: 'line',
                    name: this.legend[index],
                    symbol: 'circle',
                    symbolSize: 2,
                    showSymbol: false,
                    smooth: false,
                    color: this.colors[index],
                    data: this.data.map(item => item[val])
                };
            })
        };
    }
}
