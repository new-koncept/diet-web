/* tslint:disable */
/* eslint-disable */
export interface Foodstuff {
  allergens?: Array<string>;
  energy?: number;
  id: number;
  name: string;
  nutrientsMassFraction?: {
[key: string]: number;
};
  weight?: number;
}
