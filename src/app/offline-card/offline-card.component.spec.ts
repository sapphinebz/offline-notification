import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineCardComponent } from './offline-card.component';

describe('OfflineCardComponent', () => {
  let component: OfflineCardComponent;
  let fixture: ComponentFixture<OfflineCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OfflineCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfflineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
