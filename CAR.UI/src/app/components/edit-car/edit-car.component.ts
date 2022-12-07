import { CarSService } from './../../services/car-s.service';
import { Car } from './../../models/car';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit{
@Input() car?: Car;
@Output() carUpdate = new EventEmitter<Car[]>();
constructor(private carSService:CarSService){}
ngOnInit(): void {}

updateCar(car:Car)
{
this.carSService.updateCar(car).subscribe((car:Car[]) =>this.carUpdate.emit(car))
}
deleteCar(car:Car)
{
  this.carSService.deleteCar(car).subscribe((cars:Car[]) =>this.carUpdate.emit(cars))
}
createCar(car:Car)
{
  this.carSService.createCar(car).subscribe((cars:Car[]) =>this.carUpdate.emit(cars))
}
}
