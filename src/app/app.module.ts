import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodstufSelectorComponent } from './foodstuf-selector/foodstuf-selector.component';
import { MaterialDesignModule } from 'src/material-design/material-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FoodstuffsComponent } from './foodstuffs/foodstuffs.component';
import { TargetValuesComponent } from './target-values/target-values.component';
import { AddEditFoodstuffComponent } from './add-edit-foodstuff/add-edit-foodstuff.component';
import { DishCalculationComponent } from './dish-calculation/dish-calculation.component';
import { FoodstuffSelectionComponent } from './foodstuff-selection/foodstuff-selection.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'foodstuff/new', component: AddEditFoodstuffComponent},
  {path: 'foodstuff/edit', component: AddEditFoodstuffComponent},
  {path: 'dish/calculate', component: DishCalculationComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    FoodstufSelectorComponent,
    FoodstuffsComponent,
    TargetValuesComponent,
    AddEditFoodstuffComponent,
    DishCalculationComponent,
    FoodstuffSelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
