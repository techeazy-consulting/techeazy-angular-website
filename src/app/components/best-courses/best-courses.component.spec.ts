import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCoursesComponent } from './best-courses.component';

describe('BestCoursesComponent', () => {
  let component: BestCoursesComponent;
  let fixture: ComponentFixture<BestCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
