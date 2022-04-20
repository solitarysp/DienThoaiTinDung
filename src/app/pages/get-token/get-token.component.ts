import {Component, OnInit} from '@angular/core';
import {UtilsService} from '../../share/service/utils.service';
import {Token} from '../../share/model/token';
import {LocalStorage} from '../../share/constant/local-storage.enum';
import {Router} from '@angular/router';

@Component({
    selector: 'app-get-token',
    templateUrl: './get-token.component.html',
    styleUrls: ['./get-token.component.scss'],
})
export class GetTokenComponent implements OnInit {

    constructor(private utilsService: UtilsService,
                private router: Router,
    ) {
    }

    ngOnInit() {
        const url = window.location.href;
        const token = url.match(/\#(?:access_token)\=([\S\s]*?)\&/);
        this.utilsService.localStorageSetItem(LocalStorage.TOKEN, token[1]);
        this.utilsService.localStorageSetItem(LocalStorage.TOKEN_exp, new Date());
        this.router.navigate(['list-guarantee'], {});
    }

}
