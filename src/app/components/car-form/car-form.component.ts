import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../../services/car.service";
import {ICar} from "../../interfaces";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit{
  form: FormGroup
  carForUpdate:ICar

  constructor(private carService:CarService) {
  }
  ngOnInit() {
    this._initFrom()
    this.carService.getCarForUpdate().subscribe(value => {
      this.carForUpdate = value
      if (value) {
        const carForUpdateValue = {...value}
        delete carForUpdateValue.id
        this.form.setValue(carForUpdateValue)
      }
    })
  }

  _initFrom():void{
    this.form = new FormGroup({
      brand:new FormControl('', [
        Validators.required
      ]),
      price: new FormControl(0,
        [
          Validators.required
        ]),
      year: new FormControl(1995,
        [
          Validators.required
        ])
    })
  }

  save():void {
    this.carService.create(this.form.value).subscribe(()=> {
      this.form.reset()
    })
  }

  update():void {
    this.carService.updateById(this.carForUpdate.id, this.form.value).subscribe(()=> {
      this.carService.setCarForUpdate(null)
      this.form.reset()
    })
  }

}
