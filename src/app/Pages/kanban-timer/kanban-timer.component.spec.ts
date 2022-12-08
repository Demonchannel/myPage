import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanTimerComponent } from './kanban-timer.component';

describe('KanbanTimerComponent', () => {
  let component: KanbanTimerComponent;
  let fixture: ComponentFixture<KanbanTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbanTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbanTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
