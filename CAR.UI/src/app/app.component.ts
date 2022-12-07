import { Car } from './models/car';
import { Component } from '@angular/core';
import { CarSService } from './services/car-s.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CAR.UI';
  carr : Car[]= [];
  carToEdit?:Car;

  constructor(private carservice: CarSService ){}
    ngOnInit():void

    {
      this.carservice
      .getCar()
      .subscribe((result:Car[]) =>(this.carr=result));
    }
    updateCarList(carr:Car[])
    {
      this.carr=carr;
    }

    initNewCar()
    {
      this.carToEdit=new Car();
    }
    editCar(car:Car)
    {
      this.carToEdit=car;
    }


}
