import {Component, OnInit, TemplateRef} from '@angular/core';
import {GoogleSheetsService} from '../../share/service/google-sheets.service';
import {SheetsGoogle} from '../../share/model/sheets-google';
import {LocalStorage} from '../../share/constant/local-storage.enum';
import {DataSheets} from '../../share/model/data-sheets';
import {from} from 'rxjs';
import {skip, take, toArray} from 'rxjs/operators';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-list-guarantee',
    templateUrl: './list-guarantee.component.html',
    styleUrls: ['./list-guarantee.component.scss'],
})
export class ListGuaranteeComponent implements OnInit {
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

    modalRefEdit?: BsModalRef;

    constructor(private googleSheetsService: GoogleSheetsService, private modalService: BsModalService) {
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
        this.valuesShow = this.dataSheetses.filter((value: DataSheets) => {
            // @ts-ignore
            if (value.values && value.values[3]) {
                // @ts-ignore
                return value.values[3].indexOf(imei) >= 0;
            }
            return false;
        });

    }

    findNew() {
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
            localStorage.setItem(LocalStorage.LIST_GUARANTEE, JSON.stringify(this.dataSheetses));
            this.changePagination(1);
        }, error1 => {
            console.log('Local');
            this.dataSheetses = JSON.parse(localStorage.getItem(LocalStorage.LIST_GUARANTEE));
            this.valuesShow = this.dataSheetses.reverse();
            this.isOffNetWOrk = true;
            this.load = false;
            this.changePagination(1);
        }, () => {
            this.load = false;
        });
        this.resetSearch();
    }

    edit(item: DataSheets, template: TemplateRef<any>) {
        this.DataSheetsEdit = this.cloneObj(item);
        this.modalRefEdit = this.modalService.show(template);
    }

    cloneObj(obj: any) {
        return JSON.parse(JSON.stringify(obj));
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

    update(dataSheetsEdit: DataSheets) {
        this.googleSheetsService.update(dataSheetsEdit, 'Bearer ya29.A0ARrdaM-LG5FQsKrFLrFDu3R0-nyw0gjn28vGNqoMOUlwxd79AAv7RpNth0qyCWq9IFXcl78aVZknOdwjCBNLeGgKvTD0NliLSV9FyI8jVZxITip1aaDAUp6551rr6Jbt39nsIVx01YxCryjZlwYTiYqGNTdoClSPb7qu').subscribe(value => {
            window.location.reload();
        });
    }
}
