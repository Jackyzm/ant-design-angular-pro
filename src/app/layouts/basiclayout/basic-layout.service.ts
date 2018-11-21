import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BasicLayoutService {
    constructor(private http: HttpClient) {}
    getNotices() {
        return this.http.get('/api/notices');
    }
    getCurrentUser() {
        return this.http.get('/api/userCurrent');
    }
}
