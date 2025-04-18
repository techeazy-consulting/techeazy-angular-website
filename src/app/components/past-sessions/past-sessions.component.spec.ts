import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastSessionsComponent } from './past-sessions.component';

describe('PastSessionsComponent', () => {
  let component: PastSessionsComponent;
  let fixture: ComponentFixture<PastSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PastSessionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
