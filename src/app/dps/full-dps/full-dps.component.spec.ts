import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullDpsComponent } from './full-dps.component';

describe('FullDpsComponent', () => {
  let component: FullDpsComponent;
  let fixture: ComponentFixture<FullDpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullDpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullDpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
