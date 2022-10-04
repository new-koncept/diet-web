import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Foodstuff } from 'src/api/models';
import { FoodstuffControllerService } from 'src/api/services';
import { FoodstuffService } from '../foodstuff.service';


@Component({
  selector: 'app-foodstuff-selection',
  templateUrl: './foodstuff-selection.component.html',
  styleUrls: ['./foodstuff-selection.component.css']
})
export class FoodstuffSelectionComponent implements OnInit {

  toSearch: string
  results: Foodstuff[] = []

  constructor(private foodstuffControllerService: FoodstuffControllerService,
    private foodstuffService: FoodstuffService) {}

  ngOnInit(): void {
  }

  search = () => {
    this.foodstuffControllerService.fetchFoodstuffsLike({pattern: this.toSearch})
    .subscribe(payload => {
      this.results = payload
    })
  }

  resultSelected = (foodstuff: Foodstuff) => {
    this.foodstuffService.setFoodstuffSelectionResult(foodstuff)
    this.results = []
    this.toSearch = ''
  }
}
