import {
    Component,
    OnChanges,
    Input,
    SimpleChanges,
    OnInit
} from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
    selector: 'app-mini-pie',
    templateUrl: './mini-pie.component.html'
})
export class MiniPieComponent implements OnInit, OnChanges {
    constructor() {}

    @Input() className = '';
    @Input() color = '';
    @Input() pieStyle = {};
    @Input() subTitle = '';
    @Input() total = '';
    @Input() height = 0;
    @Input() percent = 0;
    @Input() radius = [];

    chartOption: EChartOption = {};

    ngOnInit() {
        this.setOption();
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes.percent || changes.color) {
            this.setOption();
        }
    }

    setOption() {
        this.chartOption = {
            grid: {},
            legend: {
                show: false
            },
            tooltip: {
                show: false
            },
            series: {
                type: 'pie',
                color: [this.color ? this.color : '#1890FF', '#ccc'],
                label: {
                    show: false
                },
                radius: this.radius,
                hoverAnimation: false,
                center: ['50%', '50%'],
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 2
                },
                data: [this.percent, 100 - this.percent]
            }
        };
    }
}
