import { Component, OnInit } from "@angular/core";
import { yuan } from "@components/charts";
import numeral from "numeral";
import { AnalysisService } from "./analysis.service";
import { getTimeDistance } from "@utils/utils";

@Component({
    selector: "app-analysis",
    templateUrl: './analysis.component.html',
    styleUrls: ['./analysis.component.less'],
    providers: [AnalysisService]
})
export class AnalysisComponent implements OnInit {
    constructor(private analysisService: AnalysisService) {}

    topColResponsiveProps = {
        nzXs: 24,
        nzSm: 12,
        nzMd: 12,
        nzLg: 12,
        nzXl: 6,
        style: 'margin-bottom: 24px;'
    };
    yuan = yuan;
    numeral = numeral;
    salesType = 'all';
    loading = true;
    rankingListData = [];
    rangePickerValue = getTimeDistance('year');

    visitData: Array<object> = [];
    salesData: Array<object> = [];
    visitData2: Array<object> = [];
    ngOnInit() {
        this.getChartData();

        const rankingListData = [];
        for (let i = 0; i < 7; i += 1) {
            rankingListData.push({
                title: `工专路 ${i} 号店`,
                total: 323234
            });
        }
        this.rankingListData = rankingListData;
    }

    handleRangePickerChange(rangePickerValue) {
        // console.log(rangePickerValue);
        this.rangePickerValue = rangePickerValue;
        this.getChartData();
    }

    getChartData() {
        this.loading = true;
        return this.analysisService
            .getChartData()
            .subscribe(
                (data: {
                    visitData: Array<object>;
                    salesData: Array<object>;
                    visitData2: Array<object>;
                }) => {
                    this.visitData = data.visitData;
                    this.salesData = data.salesData;
                    this.visitData2 = data.visitData2;
                    this.loading = false;
                }
            );
    }

    isActive(type) {
        const value = getTimeDistance(type);
        if (!this.rangePickerValue[0] || !this.rangePickerValue[1]) {
            return;
        }
        if (
            this.rangePickerValue[0] === value[0] &&
            this.rangePickerValue[1] === value[1]
        ) {
            return 'currentDate';
        }
    }

    selectDate(type) {
        this.rangePickerValue = getTimeDistance(type);
        this.getChartData();
    }

    handleChangeSalesType(val) {
        this.salesType = val;
    }
}
