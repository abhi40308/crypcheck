import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrdetailComponent } from './currdetail.component';

describe('CurrdetailComponent', () => {
  let component: CurrdetailComponent;
  let fixture: ComponentFixture<CurrdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
