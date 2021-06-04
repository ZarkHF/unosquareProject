import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GametoysComponent } from './gametoys.component';

describe('GametoysComponent', () => {
  let component: GametoysComponent;
  let fixture: ComponentFixture<GametoysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GametoysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GametoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
