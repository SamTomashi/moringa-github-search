import { Component, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UsersService } from '../services/users/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  title = 'githubApi';

  userProfile: any =  {};
  isLoading = true;

  @Input() username: any = '';


  constructor(private usersService: UsersService){}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const {username} = changes;
    if(username?.currentValue.length > 0){
      this.getUserProfile(username?.currentValue);
    }
  }

  async getUserProfile(username: String){
    try{
      this.isLoading = false;
      const repos = await this.usersService.getUsers(username);
      this.userProfile = repos;
    }catch(error){
      console.log(error)
    }finally{
      this.isLoading = true;
    }
  }
}
