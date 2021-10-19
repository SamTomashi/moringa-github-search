import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'githubApi';

  mySubscription = new Subscription();
  isLoading = true;

  searchForm = new FormGroup({
    username: new FormControl('SamTomashi'),
    repository: new FormControl('africastalking-php'),
  });

  username = '';
  repository = '';

  constructor(){}
  ngOnDestroy(): void {
    // this.mySubscription.unsubscribe();
  }
  ngOnInit(): void {
    // this.getPublicRepositories();
  }

  getUserInput(){
    this.username = this.searchForm.getRawValue().username;
    this.repository = this.searchForm.getRawValue().repository;
  }

  
}
