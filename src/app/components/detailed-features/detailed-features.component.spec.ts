import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedFeaturesComponent } from './detailed-features.component';

describe('DetailedFeaturesComponent', () => {
  let component: DetailedFeaturesComponent;
  let fixture: ComponentFixture<DetailedFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
