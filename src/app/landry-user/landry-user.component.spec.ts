import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandryUserComponent } from './landry-user.component';

describe('LandryUserComponent', () => {
  let component: LandryUserComponent;
  let fixture: ComponentFixture<LandryUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandryUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
