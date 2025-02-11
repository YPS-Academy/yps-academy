import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudDashComponent } from './stud-dash.component';

describe('StudDashComponent', () => {
  let component: StudDashComponent;
  let fixture: ComponentFixture<StudDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
