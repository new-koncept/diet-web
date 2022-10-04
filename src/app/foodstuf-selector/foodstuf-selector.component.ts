import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppFoodstuff } from '../shared/model/Foodstuff';
import { FoodstuffService } from '../foodstuff.service';

@Component({
  selector: 'app-foodstuf-selector',
  templateUrl: './foodstuf-selector.component.html',
  styleUrls: ['./foodstuf-selector.component.css']
})
export class FoodstufSelectorComponent implements OnInit {

  constructor(private http: HttpClient, private foodstuffService: FoodstuffService) { }

  value = ""
  foodstuffs: AppFoodstuff[] = [];

  ngOnInit(): void {
    this.foodstuffService.foodstuffsContainingPattern$.subscribe(data => {
      this.foodstuffs = data;
    });
  }

  search = () => {
    this.foodstuffService.foodstuffsContainingPattern(this.value);
  }

  foodstuffSelected = (id: number) => {
    this.foodstuffService.addFoodstuff(id);
  }
}
