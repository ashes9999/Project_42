import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvpatComponent } from './advpat.component';

describe('AdvpatComponent', () => {
  let component: AdvpatComponent;
  let fixture: ComponentFixture<AdvpatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvpatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvpatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
