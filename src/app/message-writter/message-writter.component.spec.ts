import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageWritterComponent } from './message-writter.component';

describe('MessageWritterComponent', () => {
  let component: MessageWritterComponent;
  let fixture: ComponentFixture<MessageWritterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageWritterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageWritterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
