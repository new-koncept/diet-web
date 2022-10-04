import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { FoodstuffService } from '../foodstuff.service';
import { AppFoodstuff } from '../shared/model/Foodstuff';

@Component({
  selector: 'app-foodstuffs',
  templateUrl: './foodstuffs.component.html',
  styleUrls: ['./foodstuffs.component.css']
})
export class FoodstuffsComponent {

  constructor(private foodstuffService: FoodstuffService) {
    this.foodstuffService.foodstuffs$.subscribe(fs => {
      this.foodstuffs = fs
      this.table?.renderRows()
    })
  }

  @ViewChild(MatTable) table: MatTable<FoodstuffTable> | undefined;

  public foodstuffs: AppFoodstuff[] = [];
  public displayedColumns: string[] = ['locked', 'name', 'weight', 'protein', 'fat', 'carbohydrate', 'fiber'];
  public showFooter: boolean = this.foodstuffs.length > 0;
  public totalWeight: number = 0;
  public totalNutrientsWeights: Record<string, number> = {
    PROTEIN: 0,
    FAT: 0,
    CARBOHYDRATE: 0,
    FIBER: 0
  }

  test = (foodstuff: AppFoodstuff) => {
    foodstuff.locked = !foodstuff.locked
    this.table?.renderRows()
  }

  recalculateWeights = () => {
    if (!this.foodstuffs.length) return
    this.totalWeight = this.foodstuffs.map(it => it.weight).reduce((prev, current) => Number(prev) + Number(current), 0) || 0;
    this.totalNutrientsWeights = this.foodstuffs.map(it => it.nutrientsWeights).reduce((prev, cur) => ({
      ...prev,
      PROTEIN: (prev!!.PROTEIN || 0) + cur!!.PROTEIN,
      FAT: (prev!!.FAT || 0) + cur!!.FAT,
      CARBOHYDRATE: (prev!!.CARBOHYDRATE || 0) + cur!!.CARBOHYDRATE,
      FIBER: (prev!!.FIBER || 0) + cur!!.FIBER
    })) || {}
    this.foodstuffService.setFoodstuffs(this.foodstuffs);
    this.table?.renderRows();
  }
}
export interface FoodstuffTable {
  name: string;
  weight?: number;
  protein?: number;
  fat?: number;
  carbohydrate?: number;
  fiber?: number;
}