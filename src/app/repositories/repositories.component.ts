import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RepositoryService } from '../services/repository/repository.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit, OnChanges {

  repositories: any;
  publicRepos: any[] = [];
  isLoading = true;

  @Input() username: any;
  @Input() repository: any;

  constructor(private reposService: RepositoryService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const {username, repository} = changes;
    if(username && !repository){
      this.getPublicRepositories(username?.currentValue);
    }

    if(username && repository){
      this.getRepository(username?.currentValue, repository.currentValue);
    }
  }
  
  async getPublicRepositories(username: String){
    try{
      this.isLoading = false;
      const repos = await this.reposService.getRepositories(username);
      this.publicRepos = repos;
    }catch(error){
      console.log(error)
    }finally{
      this.isLoading = true;
    }
  }

  async getRepository(username: String, repository:String){
    try{
      this.isLoading = false;
      const repos = await this.reposService.getRepository(username,repository);
      this.repositories = repos;
    }catch(error){
      console.log(error)
    }finally{
      this.isLoading = true;
    }
  }


}
