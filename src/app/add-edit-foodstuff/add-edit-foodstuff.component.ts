import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Foodstuff } from 'src/api/models'
import { nutrientsMax100Validator } from './nutrientsMax100Validator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FoodstuffControllerService } from 'src/api/services';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FoodstuffService } from '../foodstuff.service';

@Component({
  selector: 'app-add-edit-foodstuff',
  templateUrl: './add-edit-foodstuff.component.html',
  styleUrls: ['./add-edit-foodstuff.component.css']
})
export class AddEditFoodstuffComponent implements OnInit, OnDestroy {

  foodstuffForm: FormGroup;
  submitButtonEnabled: boolean = true;
  mode: 'ADD' | 'EDIT';
  private routeSubscription: Subscription
  foodstuff: Foodstuff | null
  private foodstuffSelectionResultSubscription: Subscription

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private foodstuffControllerService: FoodstuffControllerService,
    router: Router,
    private foodstuffService: FoodstuffService
  ) {
    this.routeSubscription =  router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.mode = val.url === '/foodstuff/edit' ? 'EDIT' : 'ADD';
      }
    })
    this.foodstuffSelectionResultSubscription = this.foodstuffService.foodstuffSelectionResult$.subscribe(result => {
      this.foodstuff = result
      this.foodstuffForm.patchValue({
        name: result.name,
        energy: result.energy,
        protein: result.nutrientsMassFraction?['PROTEIN'] : 0 * 100,
        carbohydrate: result.nutrientsMassFraction?['CARBOHYDRATE'] : 0 * 100,
        fat: result.nutrientsMassFraction?['FAT'] : 0 * 100,
        fiber: result.nutrientsMassFraction?['FIBER'] : 0 * 100
      })
    })
   }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe()
    this.foodstuffSelectionResultSubscription.unsubscribe()
  }

  ngOnInit(): void {
    this.foodstuffForm = this.formBuilder.group({
      name: ['', Validators.max(100)],
      energy: '',
      protein: ['', Validators.max(100)],
      carbohydrate: ['', Validators.max(100)],
      fat: ['', Validators.max(100)],
      fiber: ['', Validators.max(100)]
    }, {
      validators: [nutrientsMax100Validator()]
    } as AbstractControlOptions)
  }

  addFoodstuffHandler = () => {
    let foodstuff: Foodstuff = {
      id: this.foodstuff!!.id,
      energy: this.foodstuffForm.get('energy')?.value,
      name: this.foodstuffForm.get('name')?.value,
      nutrientsMassFraction: {
        'PROTEIN': (this.foodstuffForm.get('protein')?.value || 0) / 100,
        'FAT': (this.foodstuffForm.get('fat')?.value || 0) / 100,
        'CARBOHYDRATE': (this.foodstuffForm.get('carbohydrate')?.value || 0) / 100,
        'FIBER': (this.foodstuffForm.get('fiber')?.value || 0) / 100
      }
    }
    this.submitButtonEnabled = false;
    this.foodstuffControllerService.updateFoodstuff$Response({ body: foodstuff }).subscribe(response => {
      this.submitButtonEnabled = true;
      if (response.status == 201) {
        this.foodstuffForm.reset();
        this._snackBar.open("Potravina přidána", "OK", {
          duration: 5000,
          verticalPosition: 'top'
        })
      } else {
        this._snackBar.open("Něco se pokazilo, zkuste prosím znova", "OK", {
          duration: 5000
        })
      }
    })
  }
}
