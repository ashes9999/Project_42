import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvaptComponent } from './advapt.component';

describe('AdvaptComponent', () => {
  let component: AdvaptComponent;
  let fixture: ComponentFixture<AdvaptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvaptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvaptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
