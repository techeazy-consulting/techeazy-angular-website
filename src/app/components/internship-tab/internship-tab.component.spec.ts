import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipTabComponent } from './internship-tab.component';

describe('InternshipTabComponent', () => {
  let component: InternshipTabComponent;
  let fixture: ComponentFixture<InternshipTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternshipTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
