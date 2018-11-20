import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges,
    Output,
    EventEmitter
} from '@angular/core';
import { groupBy } from 'lodash';
import { distanceInWordsToNow } from 'date-fns';

@Component({
    selector: 'app-notice-icon',
    templateUrl: './notice-icon.component.html',
    styleUrls: ['./notice-icon.component.less']
})
export class NoticeIconComponent implements OnInit, OnChanges {
    @Input() className: string;
    @Input() notices: Array<object>;
    @Input() loading: boolean;
    @Input() count: number;

    @Output() clear: EventEmitter<any> = new EventEmitter();
    @Output() popupVisibleChange: EventEmitter<any> = new EventEmitter();
    @Output() itemClick: EventEmitter<any> = new EventEmitter();

    tabType = '';
    locale = {
        emptyText: '暂无数据',
        clear: '清空'
    };
    dataList = [];
    constructor() {}

    ngOnInit() {
        this.setDataList();
    }

    ngOnChanges(changes: SimpleChanges): void {
        // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        // Add '${implements OnChanges}' to the class.
        // console.log(changes);
        if (changes.notices) {
            this.setDataList();
        }
    }
    onPopupVisibleChange(val): void {
        this.popupVisibleChange.emit(val);
    }
    onTabChange(): void {
        console.log('onTabChange');
    }
    setDataList() {
        this.dataList = [
            {
                list: this.getNoticeData()['通知'],
                title: '通知',
                emptyText: '你已查看所有通知',
                emptyImage:
                    'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg'
            },
            {
                list: this.getNoticeData()['消息'],
                title: '消息',
                emptyText: '您已读完所有消息',
                emptyImage:
                    'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg'
            },
            {
                list: this.getNoticeData()['待办'],
                title: '待办',
                emptyText: '你已完成所有待办',
                emptyImage:
                    'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg'
            }
        ];
    }
    private getNoticeData() {
        if (!this.notices || this.notices.length === 0) {
            return {};
        }
        const newNotices = this.notices.map((notice: { datetime; id; key }) => {
            const newNotice = { ...notice };
            if (newNotice.datetime) {
                newNotice.datetime = distanceInWordsToNow(notice.datetime, {
                    locale: (window as any).fnsLocale
                });
            }
            // transform id to item key
            if (newNotice.id) {
                newNotice.key = newNotice.id;
            }
            return newNotice;
        });
        return groupBy(newNotices, 'type');
    }
    onClear(val: string) {
        this.clear.emit(val);
    }

    onItemClick(item, tabProps): void {
        this.itemClick.emit({ item, tabProps });
    }
}
