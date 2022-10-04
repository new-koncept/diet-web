import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCalculationComponent } from './dish-calculation.component';

describe('DishCalculationComponent', () => {
  let component: DishCalculationComponent;
  let fixture: ComponentFixture<DishCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishCalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
