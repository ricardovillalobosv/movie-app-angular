import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonMoviePosterComponent } from './skeleton-movie-poster.component';

describe('SkeletonMoviePosterComponent', () => {
  let component: SkeletonMoviePosterComponent;
  let fixture: ComponentFixture<SkeletonMoviePosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonMoviePosterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonMoviePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
