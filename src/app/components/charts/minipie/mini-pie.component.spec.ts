import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniPieComponent } from './mini-pie.component';

describe('MiniPieComponent', () => {
  let component: MiniPieComponent;
  let fixture: ComponentFixture<MiniPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
