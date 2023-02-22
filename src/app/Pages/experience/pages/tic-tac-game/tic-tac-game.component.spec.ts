import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTacGameComponent } from './tic-tac-game.component';

describe('TicTacGameComponent', () => {
  let component: TicTacGameComponent;
  let fixture: ComponentFixture<TicTacGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicTacGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicTacGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
