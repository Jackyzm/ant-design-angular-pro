import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnalysisService {
    constructor(private http: HttpClient) {}

    getChartData() {
        return this.http.get('/api/charts');
    }
}
