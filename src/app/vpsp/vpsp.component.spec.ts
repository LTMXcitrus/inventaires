import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpspComponent } from './vpsp.component';

describe('VpspComponent', () => {
  let component: VpspComponent;
  let fixture: ComponentFixture<VpspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
