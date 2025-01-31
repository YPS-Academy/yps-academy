import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurResultComponent } from './our-result.component';

describe('OurResultComponent', () => {
  let component: OurResultComponent;
  let fixture: ComponentFixture<OurResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
