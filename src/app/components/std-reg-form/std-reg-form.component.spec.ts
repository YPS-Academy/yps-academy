import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdRegFormComponent } from './std-reg-form.component';

describe('StdRegFormComponent', () => {
  let component: StdRegFormComponent;
  let fixture: ComponentFixture<StdRegFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdRegFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
