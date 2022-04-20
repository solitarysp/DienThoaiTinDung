import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GoogleSheetsService {

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<any> {
        return this.http.get(
            'https://content-sheets.googleapis.com/v4/spreadsheets/1A8_oc6LId0_tQSy7VbcmGTJdRFjgYcsFQoJfJWKw_kM/values/A2%3AF10000?key=AIzaSyD0y7qJ_zFRKlAb6Fmu2sYbowlhAOOtpy4&prettyPrint=false'
        );
    }

    update(data, authen): Observable<any> {
        const headers = {
            authorization: authen,
        };
        const update: Update = new Update();
        update.values.push(data.values);
        return this.http.put(
            'https://content-sheets.googleapis.com/v4/spreadsheets/1A8_oc6LId0_tQSy7VbcmGTJdRFjgYcsFQoJfJWKw_kM/values/A' + data.id +
            '?valueInputOption=RAW&alt=json'
            , update, {headers});
    }

}

class Update {
    values: Array<Array<string>> = [];
}
