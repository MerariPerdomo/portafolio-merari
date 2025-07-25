import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardServicios } from './card-servicios';

describe('CardServicios', () => {
  let component: CardServicios;
  let fixture: ComponentFixture<CardServicios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardServicios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardServicios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
