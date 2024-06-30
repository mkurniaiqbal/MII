import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafikComponent } from './grafik.component';

describe('GrafikComponent', () => {
  let component: GrafikComponent;
  let fixture: ComponentFixture<GrafikComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrafikComponent]
    });
    fixture = TestBed.createComponent(GrafikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
