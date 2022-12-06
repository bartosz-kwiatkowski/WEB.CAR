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

  constructor(private carservice: CarSService ){}
    ngOnInit():void

    {
      this.carservice
      .getCar()
      .subscribe((result:Car[]) =>(this.carr=result));

    }


}
