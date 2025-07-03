import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoLookScreenComponent } from './nuevo-look-screen.component';

describe('NuevoLookScreenComponent', () => {
  let component: NuevoLookScreenComponent;
  let fixture: ComponentFixture<NuevoLookScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoLookScreenComponent]
    });
    fixture = TestBed.createComponent(NuevoLookScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
