import {GithubApiService} from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';

let svc = new GithubApiService();
svc.getUserInfo('rajeshduggal', (user: User) => {
    svc.getRepos('rajeshduggal', (repos: Repo[]) => {
        user.repos = repos;
        console.log(user);
    })
});