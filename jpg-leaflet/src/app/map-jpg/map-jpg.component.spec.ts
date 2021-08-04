import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapJpgComponent } from './map-jpg.component';

describe('MapJpgComponent', () => {
  let component: MapJpgComponent;
  let fixture: ComponentFixture<MapJpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapJpgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapJpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
