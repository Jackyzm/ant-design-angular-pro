import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { AnalysisComponent } from './analysis/analysis.component';
import { MonitorComponent } from './monitor/monitor.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from '../shared.module';

import {
    ChartCardComponent,
    FieldComponent,
    MiniAreaComponent,
    MiniBarComponent,
    MiniProgressComponent,
    BarComponent,
    PieComponent
} from '@components/charts';
import { TrendComponent } from '@components/trend/trend.component';
import { NumberInfoComponent } from '@components/numberinfo/number-info.component';

@NgModule({
    declarations: [
        AnalysisComponent,
        MonitorComponent,
        ChartCardComponent,
        FieldComponent,
        TrendComponent,
        MiniAreaComponent,
        MiniBarComponent,
        MiniProgressComponent,
        BarComponent,
        NumberInfoComponent,
        PieComponent
    ],
    imports: [DashboardRoutingModule, SharedModule, NgxEchartsModule]
})
export class DashboardModule {}
