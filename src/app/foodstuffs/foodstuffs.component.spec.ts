import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodstuffsComponent } from './foodstuffs.component';

describe('FoodstuffsComponent', () => {
  let component: FoodstuffsComponent;
  let fixture: ComponentFixture<FoodstuffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodstuffsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodstuffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
