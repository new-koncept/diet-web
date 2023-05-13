/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CalculateFoodstuffsWeightsRequest } from '../models/calculate-foodstuffs-weights-request';
import { Dish } from '../models/dish';
import { Foodstuff } from '../models/foodstuff';

@Injectable({
  providedIn: 'root',
})
export class FoodstuffControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation updateFoodstuff
   */
  static readonly UpdateFoodstuffPath = '/foodstuff';

  /**
   * Updates foodstuff.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateFoodstuff()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateFoodstuff$Response(params: {
    context?: HttpContext
    body: Foodstuff
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FoodstuffControllerService.UpdateFoodstuffPath, 'put');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Updates foodstuff.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateFoodstuff$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateFoodstuff(params: {
    context?: HttpContext
    body: Foodstuff
  }
): Observable<void> {

    return this.updateFoodstuff$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation saveFoodstuff
   */
  static readonly SaveFoodstuffPath = '/foodstuff';

  /**
   * Save foodstuff.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveFoodstuff()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveFoodstuff$Response(params: {
    context?: HttpContext
    body: Foodstuff
  }
): Observable<StrictHttpResponse<Foodstuff>> {

    const rb = new RequestBuilder(this.rootUrl, FoodstuffControllerService.SaveFoodstuffPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Foodstuff>;
      })
    );
  }

  /**
   * Save foodstuff.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `saveFoodstuff$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveFoodstuff(params: {
    context?: HttpContext
    body: Foodstuff
  }
): Observable<Foodstuff> {

    return this.saveFoodstuff$Response(params).pipe(
      map((r: StrictHttpResponse<Foodstuff>) => r.body as Foodstuff)
    );
  }

  /**
   * Path part for operation calculateFoodstuffsWeights
   */
  static readonly CalculateFoodstuffsWeightsPath = '/foodstuffs/weights';

  /**
   * Calculates weights for particular foodstuffs respecting desired weight of nutrients.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `calculateFoodstuffsWeights()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  calculateFoodstuffsWeights$Response(params: {
    context?: HttpContext
    body: CalculateFoodstuffsWeightsRequest
  }
): Observable<StrictHttpResponse<{
[key: string]: number;
}>> {

    const rb = new RequestBuilder(this.rootUrl, FoodstuffControllerService.CalculateFoodstuffsWeightsPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        [key: string]: number;
        }>;
      })
    );
  }

  /**
   * Calculates weights for particular foodstuffs respecting desired weight of nutrients.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `calculateFoodstuffsWeights$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  calculateFoodstuffsWeights(params: {
    context?: HttpContext
    body: CalculateFoodstuffsWeightsRequest
  }
): Observable<{
[key: string]: number;
}> {

    return this.calculateFoodstuffsWeights$Response(params).pipe(
      map((r: StrictHttpResponse<{
[key: string]: number;
}>) => r.body as {
[key: string]: number;
})
    );
  }

  /**
   * Path part for operation fetchFoodstuffsLike
   */
  static readonly FetchFoodstuffsLikePath = '/foodstuffs/contain/{pattern}';

  /**
   * Get foodstuffs containing pattern.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fetchFoodstuffsLike()` instead.
   *
   * This method doesn't expect any request body.
   */
  fetchFoodstuffsLike$Response(params: {
    pattern: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Foodstuff>>> {

    const rb = new RequestBuilder(this.rootUrl, FoodstuffControllerService.FetchFoodstuffsLikePath, 'get');
    if (params) {
      rb.path('pattern', params.pattern, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Foodstuff>>;
      })
    );
  }

  /**
   * Get foodstuffs containing pattern.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `fetchFoodstuffsLike$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fetchFoodstuffsLike(params: {
    pattern: string;
    context?: HttpContext
  }
): Observable<Array<Foodstuff>> {

    return this.fetchFoodstuffsLike$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Foodstuff>>) => r.body as Array<Foodstuff>)
    );
  }

  /**
   * Path part for operation getAllDishes
   */
  static readonly GetAllDishesPath = '/dishes';

  /**
   * Retrieve all dishes.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllDishes()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllDishes$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Dish>>> {

    const rb = new RequestBuilder(this.rootUrl, FoodstuffControllerService.GetAllDishesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Dish>>;
      })
    );
  }

  /**
   * Retrieve all dishes.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllDishes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllDishes(params?: {
    context?: HttpContext
  }
): Observable<Array<Dish>> {

    return this.getAllDishes$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Dish>>) => r.body as Array<Dish>)
    );
  }

  /**
   * Path part for operation getFoodstuff
   */
  static readonly GetFoodstuffPath = '/dish/{id}';

  /**
   * Retrieve dish by id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFoodstuff()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFoodstuff$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Dish>> {

    const rb = new RequestBuilder(this.rootUrl, FoodstuffControllerService.GetFoodstuffPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Dish>;
      })
    );
  }

  /**
   * Retrieve dish by id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getFoodstuff$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFoodstuff(params: {
    id: number;
    context?: HttpContext
  }
): Observable<Dish> {

    return this.getFoodstuff$Response(params).pipe(
      map((r: StrictHttpResponse<Dish>) => r.body as Dish)
    );
  }

  /**
   * Path part for operation calculatePortion
   */
  static readonly CalculatePortionPath = '/dish/{dishId}/nutrient/{nutrient}/weight/{targetWeight}';

  /**
   * Calculates recommended dish weight.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `calculatePortion()` instead.
   *
   * This method doesn't expect any request body.
   */
  calculatePortion$Response(params: {
    dishId: number;
    nutrient: 'PROTEIN' | 'CARBOHYDRATE' | 'FAT' | 'FIBER';
    targetWeight: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, FoodstuffControllerService.CalculatePortionPath, 'get');
    if (params) {
      rb.path('dishId', params.dishId, {});
      rb.path('nutrient', params.nutrient, {});
      rb.path('targetWeight', params.targetWeight, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * Calculates recommended dish weight.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `calculatePortion$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  calculatePortion(params: {
    dishId: number;
    nutrient: 'PROTEIN' | 'CARBOHYDRATE' | 'FAT' | 'FIBER';
    targetWeight: number;
    context?: HttpContext
  }
): Observable<number> {

    return this.calculatePortion$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
