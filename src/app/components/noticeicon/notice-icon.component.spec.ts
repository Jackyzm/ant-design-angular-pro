import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeIconComponent } from './notice-icon.component';

describe('NoticeIconComponent', () => {
  let component: NoticeIconComponent;
  let fixture: ComponentFixture<NoticeIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
