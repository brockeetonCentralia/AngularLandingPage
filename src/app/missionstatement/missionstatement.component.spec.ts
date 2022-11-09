import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionstatementComponent } from './missionstatement.component';

describe('MissionstatementComponent', () => {
  let component: MissionstatementComponent;
  let fixture: ComponentFixture<MissionstatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionstatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
