import numeral from 'numeral';
import { ChartCardComponent } from './chartcard/chart-card.component';
import { FieldComponent } from './field/field.component';
import { MiniAreaComponent } from './miniarea/mini-area.component';
import { MiniBarComponent } from './minibar/mini-bar.component';
import { MiniProgressComponent } from './miniprogress/mini-progress.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
// import MiniPie from "./MiniPie";
// import Radar from "./Radar";
// import Gauge from "./Gauge";
// import Field from "./Field";
// import WaterWave from "./WaterWave";
// import TagCloud from "./TagCloud";
// import TimelineChart from "./TimelineChart";

const yuan = val => `¥ ${numeral(val).format('0,0')}`;
const colors = [
    '#1890FF',
    '#13C2C2',
    '#2FC25B',
    '#FACC14',
    '#F04864',
    '#8543E0',
    '#3436C7',
    '#223273'
];

export {
    yuan,
    colors,
    // MiniPie,
    // Gauge,
    // Radar,
    ChartCardComponent,
    FieldComponent,
    MiniAreaComponent,
    MiniBarComponent,
    MiniProgressComponent,
    BarComponent,
    PieComponent
    // WaterWave,
    // TagCloud,
    // TimelineChart
};
