import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvdocComponent } from './advdoc.component';

describe('AdvdocComponent', () => {
  let component: AdvdocComponent;
  let fixture: ComponentFixture<AdvdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvdocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
