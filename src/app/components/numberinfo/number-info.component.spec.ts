import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInfoComponent } from './number-info.component';

describe('NumberInfoComponent', () => {
  let component: NumberInfoComponent;
  let fixture: ComponentFixture<NumberInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
