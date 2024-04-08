import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRepairPhoneComponent } from './list-repair-phone.component';

describe('ListRepairPhoneComponent', () => {
  let component: ListRepairPhoneComponent;
  let fixture: ComponentFixture<ListRepairPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRepairPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRepairPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
