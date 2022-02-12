import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KabanComponent } from './kaban.component';

describe('MainViewComponent', () => {
  let component: KabanComponent;
  let fixture: ComponentFixture<KabanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KabanComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KabanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
