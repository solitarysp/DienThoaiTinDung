import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor(@Inject(DOCUMENT) private document) {
    }

    gotoTop() {
        this.document.body.scrollTop = 0;
        this.document.documentElement.scrollTop = 0;
    }
}
