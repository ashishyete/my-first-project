import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystimeComponent } from './systime.component';

describe('SystimeComponent', () => {
  let component: SystimeComponent;
  let fixture: ComponentFixture<SystimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
