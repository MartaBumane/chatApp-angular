import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfingChatComponent } from './surfing-chat.component';

describe('SurfingChatComponent', () => {
  let component: SurfingChatComponent;
  let fixture: ComponentFixture<SurfingChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfingChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfingChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
