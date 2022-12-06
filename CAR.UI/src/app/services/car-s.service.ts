import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarSService {
private url = "Car";
apiURL = 'https://localhost:7187/api';

  constructor(private http: HttpClient) { }

  public getCar() : Observable<Car[]>
  {

    return this.http.get<Car[]>(`${this.apiURL}/${this.url}`);


  }
}
