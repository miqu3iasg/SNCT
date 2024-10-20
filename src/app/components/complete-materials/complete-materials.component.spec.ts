import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteMaterialsComponent } from './complete-materials.component';

describe('CompleteMaterialsComponent', () => {
  let component: CompleteMaterialsComponent;
  let fixture: ComponentFixture<CompleteMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteMaterialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
