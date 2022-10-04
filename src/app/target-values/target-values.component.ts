import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FoodstuffService } from '../foodstuff.service';

@Component({
  selector: 'app-target-values',
  templateUrl: './target-values.component.html',
  styleUrls: ['./target-values.component.css']
})
export class TargetValuesComponent implements OnInit, OnDestroy {

  constructor(private foodstuffService: FoodstuffService, private formBuilder: FormBuilder) { }

  public foodstuffsToCalculateCount: number = 0
  private foodstuffsToCalculateSubscription: Subscription

  targetValuesForm: FormGroup = this.formBuilder.group({
    proteinCheck: false,
    proteinWeight: null,
    carbohydrateCheck: false,
    carbohydrateWeight: null,
    fatCheck: false,
    fatWeight: null,
    fiberCheck: false,
    fiberWeight: null
  })

  calculate = () => {
    console.log(this.targetValuesForm.get('proteinCheck')?.value)
  }

  ngOnInit(): void {
    this.foodstuffsToCalculateSubscription = this.foodstuffService.foodstuffs$.subscribe(fs => {
      this.foodstuffsToCalculateCount = fs.length
    })
  }

  ngOnDestroy(): void {
    this.foodstuffsToCalculateSubscription.unsubscribe()
  }
}
