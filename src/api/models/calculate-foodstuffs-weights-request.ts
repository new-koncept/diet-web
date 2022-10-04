/* tslint:disable */
/* eslint-disable */
import { Foodstuff } from './foodstuff';
import { Nutrient } from './nutrient';
export interface CalculateFoodstuffsWeightsRequest {
  foodstuffs: Array<Foodstuff>;
  nutrients: Array<Nutrient>;
}
