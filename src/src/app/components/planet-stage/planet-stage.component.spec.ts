import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetStageComponent } from './planet-stage.component';

describe('PlanetStageComponent', () => {
  let component: PlanetStageComponent;
  let fixture: ComponentFixture<PlanetStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
