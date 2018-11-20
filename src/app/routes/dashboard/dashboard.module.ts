import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { AnalysisComponent } from './analysis/analysis.component';
import { MonitorComponent } from './monitor/monitor.component';

import { SharedModule } from '../shared.module';

import { ChartCardComponent, FieldComponent } from '@components/charts';
import { TrendComponent } from '@components/trend/trend.component';

@NgModule({
    declarations: [
        AnalysisComponent,
        MonitorComponent,
        ChartCardComponent,
        FieldComponent,
        TrendComponent
    ],
    imports: [DashboardRoutingModule, SharedModule]
})
export class DashboardModule {}
