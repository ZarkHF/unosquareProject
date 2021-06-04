import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GametoysformComponent } from './gametoysform.component';

describe('GametoysformComponent', () => {
  let component: GametoysformComponent;
  let fixture: ComponentFixture<GametoysformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GametoysformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GametoysformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
