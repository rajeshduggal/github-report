import {GithubApiService} from './GithubApiService';
import { User } from './User';
import { Repo } from './Repo';

let svc = new GithubApiService();
svc.getUserInfo('rajeshduggal', (user: User) => {
    console.log(user);
});

svc.getRepos('rajeshduggal', (repos: Repo[]) => {
    console.log(repos);
});