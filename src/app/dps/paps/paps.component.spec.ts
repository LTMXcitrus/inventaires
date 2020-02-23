import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapsComponent } from './paps.component';

describe('PapsComponent', () => {
  let component: PapsComponent;
  let fixture: ComponentFixture<PapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
