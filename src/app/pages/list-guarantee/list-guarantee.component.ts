import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {GoogleSheetsService} from '../../share/service/google-sheets.service';
import {SheetsGoogle} from '../../share/model/sheets-google';
import {LocalStorage} from '../../share/constant/local-storage.enum';
import {DataSheets} from '../../share/model/data-sheets';
import {from, of} from 'rxjs';
import {concatMap, delay, skip, take, timeout, toArray} from 'rxjs/operators';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {UtilsService} from '../../share/service/utils.service';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-list-guarantee',
    templateUrl: './list-guarantee.component.html',
    styleUrls: ['./list-guarantee.component.scss'],
})
export class ListGuaranteeComponent implements OnInit {
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

    modalRefEdit?: BsModalRef;
    modalref_template_get_token?: BsModalRef;

    constructor(private googleSheetsService: GoogleSheetsService, private modalService: BsModalService,
                private utilsService: UtilsService) {
        this.findNew();
    }

    ngOnInit() {
        of(10000)
            .pipe(delay(500))
            .subscribe(val => {
                    //2400000 = 40 phut
                    if (!this.utilsService.isNotTimeoutKey(LocalStorage.TOKEN_exp, 2400000, true)) {
                        this.modalref_template_get_token = this.modalService.show(this.TEMPLATE_GET_TOKEN);
                    }
                    if (!this.utilsService.localStorageGetByName(LocalStorage.TOKEN)) {
                        this.modalref_template_get_token = this.modalService.show(this.TEMPLATE_GET_TOKEN);
                    }
                }
            )
        ;
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
        if (this.utilsService.localStorageGetByName(LocalStorage.TOKEN)) {
            this.DataSheetsEdit = this.cloneObj(item);
            this.modalRefEdit = this.modalService.show(template);
        }
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
        this.googleSheetsService.update(dataSheetsEdit, 'Bearer ' + this.utilsService.localStorageGetByName(LocalStorage.TOKEN)).subscribe(value => {
            window.location.reload();
        });
    }

    btnLogin() {
        window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=601662646531-c14p4khfpetj9j4nmm9isuqauo8o514f.apps.googleusercontent.com&scope=https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets&redirect_uri=${environment.getTokenCallBack}&response_type=token&prompt=consent`;
    }
}
