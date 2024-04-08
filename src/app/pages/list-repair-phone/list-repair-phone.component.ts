import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DataSheets} from '../../share/model/data-sheets';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {GoogleSheetsService} from '../../share/service/google-sheets.service';
import {UtilsService} from '../../share/service/utils.service';
import {from, of} from 'rxjs';
import {delay, skip, take, toArray} from 'rxjs/operators';
import {LocalStorage} from '../../share/constant/local-storage.enum';
import {SheetsGoogle} from '../../share/model/sheets-google';
import {ListRepairPhoneGoogleSheetsService} from '../../share/service/list-repair-phone-google-sheets.service';

@Component({
    selector: 'app-list-repair-phone',
    templateUrl: './list-repair-phone.component.html',
    styleUrls: ['./list-repair-phone.component.scss']
})
export class ListRepairPhoneComponent {
    @ViewChild('template_get_token')
    private TEMPLATE_GET_TOKEN: TemplateRef<any>;

    dataSheetses: Array<DataSheets> = [];
    valuesShow: Array<DataSheets> = [];
    valuesShowDataHtml: Array<DataSheets> = [];
    search = {
        imei: ''
    };
    isOffNetWOrk = false;
    load = false;
    DataSheetsEdit: DataSheets;
    page: number = 0;
    sizeShowPagination = 15;

    constructor(private googleSheetsService: ListRepairPhoneGoogleSheetsService, private modalService: BsModalService,
                private utilsService: UtilsService) {
        this.findNew();
    }

    resetSearch() {
        this.search = {
            imei: ''
        };
    }

    findByImei(imei: string) {
        this.valuesShow = this.dataSheetses.filter((value: DataSheets) => {
            // @ts-ignore
            if (value.values && value.values[3]) {
                // @ts-ignore
                return value.values[3].indexOf(imei) >= 0;
            }
            return false;
        });
        this.changePagination(1);
    }

    findNew() {
        this.isOffNetWOrk = false;
        this.load = true;
        this.googleSheetsService.findAll().subscribe((value: SheetsGoogle) => {
            this.load = false;
            const valuesAll = value.values;
            let id = 2;
            valuesAll.forEach(value1 => {
                const item: DataSheets = new DataSheets();
                item.id = id++;
                item.values = value1;
                this.dataSheetses.push(item);
            });
            this.valuesShow = this.dataSheetses.reverse();
            localStorage.setItem(LocalStorage.LIST_REPAIR_PHONE, JSON.stringify(this.dataSheetses));
            this.changePagination(1);
        }, error1 => {
            console.log('Local');
            this.dataSheetses = JSON.parse(localStorage.getItem(LocalStorage.LIST_REPAIR_PHONE));
            this.valuesShow = this.dataSheetses.reverse();
            this.isOffNetWOrk = true;
            this.load = false;
            this.changePagination(1);
        }, () => {
            this.load = false;
        });
        this.resetSearch();
    }

    changePagination(page: number) {
        this.page = page;
        from(this.valuesShow).pipe(skip(this.sizeShowPagination * (this.page - 1)),
            take(this.sizeShowPagination), toArray()).subscribe(value => {
            this.valuesShowDataHtml = value;
        }, error => {
            console.log(error);
        });
    }

}
