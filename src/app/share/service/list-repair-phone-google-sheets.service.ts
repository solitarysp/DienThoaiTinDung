import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListRepairPhoneGoogleSheetsService {


  constructor(private http: HttpClient) {
  }

  findAll(): Observable<any> {
    return this.http.get(
        'https://content-sheets.googleapis.com/v4/spreadsheets/1FIa16Z17UMXTBGKI6p8gLE2e3Uq4-UuTbQ_5EjECPb4/values/A2%3AG100000?key=AIzaSyC533AiuP8OX7p1wzW1UgY5p0nYof0MsuY&prettyPrint=false'
    );
  }
}
