import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodstufSelectorComponent } from './foodstuf-selector.component';

describe('FoodstufSelectorComponent', () => {
  let component: FoodstufSelectorComponent;
  let fixture: ComponentFixture<FoodstufSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodstufSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodstufSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
