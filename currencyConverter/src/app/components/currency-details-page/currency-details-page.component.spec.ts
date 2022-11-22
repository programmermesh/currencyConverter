import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyDetailsPageComponent } from './currency-details-page.component';

describe('CurrencyDetailsPageComponent', () => {
  let component: CurrencyDetailsPageComponent;
  let fixture: ComponentFixture<CurrencyDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
