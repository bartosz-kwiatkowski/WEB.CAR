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
  public updateCar(car:Car) : Observable<Car[]>
  {
    return this.http.put<Car[]>(`${this.apiURL}/${this.url}`,car);
  }
  public createCar(car:Car) : Observable<Car[]>
  {
    return this.http.post<Car[]>(`${this.apiURL}/${this.url}`,car);
  }
  public deleteCar(car:Car) : Observable<Car[]>
  {
    return this.http.delete<Car[]>(`${this.apiURL}/${this.url}/${car.id}`);
  }
}
