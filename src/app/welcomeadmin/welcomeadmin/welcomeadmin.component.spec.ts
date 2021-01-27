import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeadminComponent } from './welcomeadmin.component';

describe('WelcomeadminComponent', () => {
  let component: WelcomeadminComponent;
  let fixture: ComponentFixture<WelcomeadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
