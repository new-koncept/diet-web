import { Foodstuff } from "src/api/models";

export interface AppFoodstuff extends Foodstuff {
    weight?: number;
    nutrientsWeights?: Record<string, number>;
    locked: boolean;
}