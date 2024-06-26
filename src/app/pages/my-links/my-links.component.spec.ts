import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLinksComponent } from './my-links.component';

describe('MyLinksComponent', () => {
  let component: MyLinksComponent;
  let fixture: ComponentFixture<MyLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
