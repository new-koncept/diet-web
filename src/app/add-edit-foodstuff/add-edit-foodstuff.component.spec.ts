import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFoodstuffComponent } from './add-edit-foodstuff.component';

describe('AddFoodstuffComponent', () => {
  let component: AddEditFoodstuffComponent;
  let fixture: ComponentFixture<AddEditFoodstuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFoodstuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFoodstuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
