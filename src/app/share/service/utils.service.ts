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
    localStorageSetItem(name: string, value: any) {
        localStorage.setItem(name, value);
    }

    localStorageGetByName(name: string): string {
        return localStorage.getItem(name);
    }
    isNotTimeoutKey(nameKey: string, timeOut: number, isAutoNewTimeout = false): boolean {
        const LastTime = this.localStorageGetByName(nameKey);

        if (LastTime) {
            const time = new Date().getTime() - new Date(LastTime).getTime();
            if (time > timeOut) {
                if (!isAutoNewTimeout) {
                    this.localStorageSetItem(nameKey, new Date());
                }
                return false;
            } else {
                return true;
            }
        }
        this.localStorageSetItem(nameKey, new Date());
        return true;
    }
}
