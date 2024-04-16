import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteIdentiteComponent } from './carte-identite.component';

describe('CarteIdentiteComponent', () => {
  let component: CarteIdentiteComponent;
  let fixture: ComponentFixture<CarteIdentiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarteIdentiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarteIdentiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
