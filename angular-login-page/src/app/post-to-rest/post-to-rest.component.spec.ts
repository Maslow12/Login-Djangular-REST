import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostToRestComponent } from './post-to-rest.component';

describe('PostToRestComponent', () => {
  let component: PostToRestComponent;
  let fixture: ComponentFixture<PostToRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostToRestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostToRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
