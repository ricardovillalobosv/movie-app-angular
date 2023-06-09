import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonMovieDetailComponent } from './skeleton-movie-detail.component';

describe('SkeletonMovieDetailComponent', () => {
  let component: SkeletonMovieDetailComponent;
  let fixture: ComponentFixture<SkeletonMovieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonMovieDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonMovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
