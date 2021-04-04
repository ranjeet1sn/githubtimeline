import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubPrifleComponent } from './github-prifle.component';

describe('GithubPrifleComponent', () => {
  let component: GithubPrifleComponent;
  let fixture: ComponentFixture<GithubPrifleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubPrifleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubPrifleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
