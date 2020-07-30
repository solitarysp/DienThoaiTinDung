import {Component, OnInit} from '@angular/core';
import {UtilsService} from '../../share/service/utils.service';

@Component({
    selector: 'app-submit-guarantee',
    templateUrl: './submit-guarantee.component.html',
    styleUrls: ['./submit-guarantee.component.scss'],
})
export class SubmitGuaranteeComponent implements OnInit {

    constructor(private utilsService: UtilsService) {
    }

    ngOnInit() {


    }

}
