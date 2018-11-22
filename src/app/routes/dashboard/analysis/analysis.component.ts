import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import numeral from 'numeral';
import { AnalysisService } from './analysis.service';
import { getTimeDistance } from '@utils/utils';
import { cloneDeep } from 'lodash';
import { colors, yuan } from '@components/charts';

@Component({
    selector: 'app-analysis',
    templateUrl: './analysis.component.html',
    styleUrls: ['./analysis.component.less'],
    providers: [AnalysisService]
})
export class AnalysisComponent implements OnInit, OnChanges {
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
    activeIndex = 0;
    colors = colors;

    visitData: Array<object> = [];
    salesData: Array<object> = [];
    visitData2: Array<object> = [];
    offlineData: Array<object> = [];
    _searchData: Array<object> = [];
    data;
    total = '';
    tableData = [];

    set salesPieData(data) {
        this.setSalesPieDataData(data);
        this.data = data;
    }

    get salesPieData() {
        if (!this.data) {
            return [];
        }
        const salesPieData = this.setSalesPieDataData(this.data);
        return salesPieData;
    }

    set searchData(searchData) {
        this._searchData = searchData;
        this.tableData = searchData;
    }
    get searchData() {
        return this._searchData;
    }

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

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }

    setSalesPieDataData(data) {
        const salesPieData =
            (this.salesType === 'all'
                ? data['salesTypeData']
                : this.salesType === 'online'
                ? data['salesTypeDataOnline']
                : data['salesTypeDataOffline']) || [];
        this.total = yuan(
            salesPieData.reduce((pre, now: { y }) => now.y + pre, 0)
        );
        return salesPieData;
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
                    searchData: Array<object>;
                    offlineData: Array<object>;
                }) => {
                    this.visitData = data.visitData;
                    this.salesData = data.salesData;
                    this.visitData2 = data.visitData2;
                    this.searchData = data.searchData;
                    this.offlineData = data.offlineData;
                    this.salesPieData = data;
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

    sort(sort: { key: string; value: string }) {
        if (sort.value) {
            const data = cloneDeep(this.searchData);
            if (sort.value === 'ascend') {
                this.tableData = data.sort((a, b) => a[sort.key] - b[sort.key]);
            } else {
                this.tableData = data.sort((a, b) => b[sort.key] - a[sort.key]);
            }
        } else {
            this.tableData = this.searchData.sort(
                (a: { index }, b: { index }) => a.index - b.index
            );
        }
    }

    handleTabChange({ index }) {
        this.activeIndex = index;
    }

    valueFormat(value) {
        return yuan(value);
    }
}
