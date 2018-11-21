import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniBarComponent } from './mini-bar.component';

describe('MiniBarComponent', () => {
  let component: MiniBarComponent;
  let fixture: ComponentFixture<MiniBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
