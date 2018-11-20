import numeral from 'numeral';
import { ChartCardComponent } from './chartcard/chart-card.component';
import { FieldComponent } from './field/field.component';
// import Bar from "./Bar";
// import Pie from "./Pie";
// import MiniPie from "./MiniPie";
// import Radar from "./Radar";
// import Gauge from "./Gauge";
// import MiniArea from "./MiniArea";
// import MiniBar from "./MiniBar";
// import MiniProgress from "./MiniProgress";
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
    // Bar,
    // Pie,
    // MiniPie,
    // Gauge,
    // Radar,
    // MiniBar,
    // MiniArea,
    // MiniProgress,
    ChartCardComponent,
    FieldComponent
    // WaterWave,
    // TagCloud,
    // TimelineChart
};
