import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicalagentComponent } from './moleculerender.component';

describe('LogicalagentComponent', () => {
  let component: LogicalagentComponent;
  let fixture: ComponentFixture<LogicalagentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicalagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicalagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
