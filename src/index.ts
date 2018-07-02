import {GithubApiService} from './GithubApiService';
import * as _ from 'lodash';
import { User } from './User';
import { Repo } from './Repo';

let svc = new GithubApiService();
let username: string = 'rajeshduggal';
if (process.argv.length === 3) {
    username = process.argv[2];
}
svc.getUserInfo(username, (user: User) => {
    svc.getRepos(username, (repos: Repo[]) => {
        let sortedRepos = _.sortBy(repos,[(repo: Repo) => repo.forkCount * -1]);
        let filteredRepos = _.take(sortedRepos, 3);
        user.repos = filteredRepos;
        console.log(user);
    })
});