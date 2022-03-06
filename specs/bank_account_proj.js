import {ProjectList} from '../pageObjects/projectList';
import { GithubProject } from '../pageObjects/githubProject';

const projectList = new ProjectList();
const githubProj = new GithubProject();

describe('Bank Account in Project List', () => {
    projectList.navigateToProjectsList();
    projectList.checkBankAppTitle();
    projectList.clickBankAppProjectList();
  });

describe('Bank Account Project in Github', () => {
  githubProj.checkBankAppProjectTitle();
});