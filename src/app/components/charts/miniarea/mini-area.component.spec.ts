import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniAreaComponent } from './mini-area.component';

describe('MiniAreaComponent', () => {
  let component: MiniAreaComponent;
  let fixture: ComponentFixture<MiniAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
