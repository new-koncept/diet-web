import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { FoodstuffControllerService } from 'src/api/services';
import { AppFoodstuff } from './shared/model/Foodstuff';
import { environment } from 'src/environments/environment';
import { Foodstuff } from 'src/api/models';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/internal/operators/take';

@Injectable({
  providedIn: 'root'
})
export class FoodstuffService {

  setFoodstuffs(foodstuffs: AppFoodstuff[]) {
    this.foodstuffsSubject.next(foodstuffs);
  }


  constructor(private http: HttpClient, private foodstuffControllerService: FoodstuffControllerService) { }

  private _foodstuffsContainingPattern: AppFoodstuff[] = [];
  public foodstuffsContainingPattern$: Subject<AppFoodstuff[]> = new Subject();

  private foodstuffsSubject: BehaviorSubject<AppFoodstuff[]> = new BehaviorSubject<AppFoodstuff[]>([]);
  public foodstuffs$: Observable<AppFoodstuff[]> = this.foodstuffsSubject.asObservable()

  private foodstuffSelectionResultSubject: Subject<Foodstuff> = new Subject()
  public foodstuffSelectionResult$: Observable<Foodstuff> = this.foodstuffSelectionResultSubject.asObservable()

  public foodstuffsContainingPattern = (pattern: string) => {

    this.foodstuffControllerService.fetchFoodstuffsLike({ pattern: pattern }).subscribe(payload => {
      this._foodstuffsContainingPattern = payload.map(p => {
        const a = {
          ...p,
          locked: true
        }
        return a
      })
      this._foodstuffsContainingPattern.forEach(f => {
        f.weight = 100;
        f.nutrientsWeights = {
          PROTEIN: 0,
          FAT: 0,
          CARBOHYDRATE: 0,
          FIBER: 0
        }
        f.locked = false
        this.recalculateWeights(f);
      })
      this.foodstuffsContainingPattern$.next(this._foodstuffsContainingPattern);
    })
  }

  public addFoodstuff = (id: number) => {
    this.foodstuffs$.pipe(take(1)).subscribe(fs => {
      if (fs.some(it => it.id === id)) return;
      let matchedFoodstuff = this._foodstuffsContainingPattern.find(fs => fs.id === id)!!;
      fs.push(matchedFoodstuff);
      this.foodstuffsSubject.next(fs);
      this.foodstuffsContainingPattern$.next([]);
    })
  }

  public recalculateWeights = (foodstuff: AppFoodstuff) => {
    let weight = foodstuff.weight!!

    return {
      'PROTEIN': weight * (foodstuff.nutrientsMassFraction?.PROTEIN || 0),
      'FAT': weight * (foodstuff.nutrientsMassFraction?.FAT || 0),
      'CARBOHYDRATE': weight * (foodstuff.nutrientsMassFraction?.PROTEIN || 0),
      'FIBER': weight * (foodstuff.nutrientsMassFraction?.FIBER || 0)
    }
  }

  setFoodstuffSelectionResult = (foodstuff: Foodstuff) => {
    this.foodstuffSelectionResultSubject.next(foodstuff)
  }
}