import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { AnalysisComponent } from './analysis/analysis.component';
import { MonitorComponent } from './monitor/monitor.component';

@NgModule({
    declarations: [AnalysisComponent, MonitorComponent],
    imports: [DashboardRoutingModule, NgZorroAntdModule]
})
export class DashboardModule {}
