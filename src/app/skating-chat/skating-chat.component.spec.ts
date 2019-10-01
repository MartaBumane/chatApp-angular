import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkatingChatComponent } from './skating-chat.component';

describe('SkatingChatComponent', () => {
  let component: SkatingChatComponent;
  let fixture: ComponentFixture<SkatingChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkatingChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkatingChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
