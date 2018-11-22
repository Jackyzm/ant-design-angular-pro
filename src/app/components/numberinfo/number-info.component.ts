import { Component, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-number-info',
    templateUrl: './number-info.component.html',
    styleUrls: ['./number-info.component.less']
})
export class NumberInfoComponent {
    constructor() {}
    _subTitle: string | TemplateRef<void>;
    _total: string | TemplateRef<void>;
    isSubTitleString: boolean;
    isTotalString: boolean;

    @Input() theme: string;
    @Input() title: string;
    @Input() gap: number;
    @Input() suffix: string;
    @Input() status: string;
    @Input() subTotal: string;
    @Input() numberInfoStyle: object;

    @Input()
    set subTitle(value: string | TemplateRef<void>) {
        this.isSubTitleString = !(value instanceof TemplateRef);
        this._subTitle = value;
    }
    get subTitle(): string | TemplateRef<void> {
        return this._subTitle;
    }

    @Input()
    set total(value: string | TemplateRef<void>) {
        this.isTotalString = !(value instanceof TemplateRef);
        this._total = value;
    }
    get total(): string | TemplateRef<void> {
        return this._total;
    }
}
