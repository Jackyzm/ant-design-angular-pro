import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasiclayoutComponent } from '@layouts/basiclayout/basiclayout.component';
import { AnalysisComponent } from './dashboard/analysis/analysis.component';

const routes: Routes = [
    {
        path: '',
        component: BasiclayoutComponent,
        children: [
            {
                path: 'dashboard/analysis',
                component: AnalysisComponent
            },
            {
                path: 'dashboard/aaa',
                component: AnalysisComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutesRoutingModule {}
