import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtdMainComponent } from './ytd-main.component';

describe('YtdMainComponent', () => {
  let component: YtdMainComponent;
  let fixture: ComponentFixture<YtdMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtdMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtdMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
