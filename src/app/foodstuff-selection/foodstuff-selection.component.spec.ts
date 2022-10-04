import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodstuffSelectionComponent } from './foodstuff-selection.component';

describe('FoodstuffSelectionComponent', () => {
  let component: FoodstuffSelectionComponent;
  let fixture: ComponentFixture<FoodstuffSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodstuffSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodstuffSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
