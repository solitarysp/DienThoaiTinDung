import {Component, OnInit} from '@angular/core';
import {GoogleSheetsService} from '../../share/service/google-sheets.service';
import {SheetsGoogle} from '../../share/model/sheets-google';
import {LocalStorage} from '../../share/constant/local-storage.enum';

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
    isOffNetWOrk = false;
    load = false;

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
        this.load = true;
        this.googleSheetsService.findAll().subscribe((value: SheetsGoogle) => {
            this.load = false;

            this.valuesAll = value.values.reverse();
            this.valuesShow = this.valuesAll;
            localStorage.setItem(LocalStorage.LIST_GUARANTEE, JSON.stringify(this.valuesAll));
        }, error1 => {
            this.valuesAll = JSON.parse(localStorage.getItem(LocalStorage.LIST_GUARANTEE));
            this.valuesShow = this.valuesAll;
            this.isOffNetWOrk = true;
            this.load = false;

        }, () => {
            this.load = false;
        });
        this.resetSearch();
    }
}
