import {
    Component,
    Input,
    OnInit,
    ViewChild,
    ElementRef,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'app-header-search',
    templateUrl: './header-search.component.html',
    styleUrls: ['./header-search.component.less']
})
export class HeaderSearchComponent implements OnInit {
    @Input() dataSource: Array<string>;
    @Input() placeholder: string;

    @ViewChild('input') inputField: ElementRef;

    @Output() search: EventEmitter<any> = new EventEmitter();

    searchMode = false;
    inputValue = '';
    options = [];

    constructor() {}

    ngOnInit() {
        this.options = this.dataSource;
    }
    enterSearchMode(): void {
        this.inputField.nativeElement.focus();
        this.searchMode = true;
    }
    leaveSearchMode(): void {
        this.inputValue = '';
        this.searchMode = false;
    }
    onInput(val): void {
        this.inputValue = val;
    }
    onSearch(option) {
        this.searchMode = true;
        this.search.emit(option);
    }
}
