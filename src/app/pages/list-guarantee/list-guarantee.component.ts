import {Component, OnInit} from '@angular/core';
import {GoogleSheetsService} from '../../share/service/google-sheets.service';
import {SheetsGoogle} from '../../share/model/sheets-google';

@Component({
    selector: 'app-list-guarantee',
    templateUrl: './list-guarantee.component.html',
    styleUrls: ['./list-guarantee.component.scss'],
})
export class ListGuaranteeComponent implements OnInit {
    valuesAll: Array<[string]>;
    valuesShow: Array<[string]> = [];
    search = {
        imei: ''
    };

    constructor(private googleSheetsService: GoogleSheetsService) {
        this.findNew();
    }

    ngOnInit() {
    }

    resetSearch() {
        this.search = {
            imei: ''
        };
    }

    findByImei(imei: string) {
        this.valuesShow = this.valuesAll.filter((value: [string]) => {
            // @ts-ignore
            return value[3].indexOf(imei) >= 0;
        });

    }

    findNew() {
        this.googleSheetsService.findAll().subscribe((value: SheetsGoogle) => {
            this.valuesAll = value.values.reverse();
            this.valuesShow = this.valuesAll;
        });
        this.resetSearch();
    }
}
