import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsTemplateComponent } from './course-details-template.component';

describe('CourseDetailsTemplateComponent', () => {
  let component: CourseDetailsTemplateComponent;
  let fixture: ComponentFixture<CourseDetailsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseDetailsTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDetailsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
