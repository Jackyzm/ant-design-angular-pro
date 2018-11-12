import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { RoutesRoutingModule } from './routes-routing.module';

import { BasiclayoutComponent } from '@layouts/basiclayout/basiclayout.component';
import { AnalysisComponent } from './dashboard/analysis/analysis.component';

const components = [BasiclayoutComponent, AnalysisComponent];

@NgModule({
    declarations: [...components],
    imports: [RoutesRoutingModule, NgZorroAntdModule]
})
export class RoutesModule {}
