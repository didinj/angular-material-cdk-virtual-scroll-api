import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScroll } from './virtual-scroll';

describe('VirtualScroll', () => {
  let component: VirtualScroll;
  let fixture: ComponentFixture<VirtualScroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualScroll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualScroll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
