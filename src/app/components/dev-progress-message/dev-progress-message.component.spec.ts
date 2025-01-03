import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevProgressMessageComponent } from './dev-progress-message.component';

describe('DevProgressMessageComponent', () => {
  let component: DevProgressMessageComponent;
  let fixture: ComponentFixture<DevProgressMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevProgressMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevProgressMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
