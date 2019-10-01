import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowboardingChatComponent } from './snowboarding-chat.component';

describe('SnowboardingChatComponent', () => {
  let component: SnowboardingChatComponent;
  let fixture: ComponentFixture<SnowboardingChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowboardingChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowboardingChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
