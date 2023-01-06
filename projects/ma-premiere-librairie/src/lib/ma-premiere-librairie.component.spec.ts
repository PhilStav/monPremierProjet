import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaPremiereLibrairieComponent } from './ma-premiere-librairie.component';

describe('MaPremiereLibrairieComponent', () => {
  let component: MaPremiereLibrairieComponent;
  let fixture: ComponentFixture<MaPremiereLibrairieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaPremiereLibrairieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaPremiereLibrairieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
