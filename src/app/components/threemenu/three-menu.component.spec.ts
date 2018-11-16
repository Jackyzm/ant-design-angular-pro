import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeMenuComponent } from './three-menu.component';

describe('ThreeMenuComponent', () => {
  let component: ThreeMenuComponent;
  let fixture: ComponentFixture<ThreeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
