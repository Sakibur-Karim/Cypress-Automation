import {ProjectList} from '../pageObjects/projectList';
import { GithubProject } from '../pageObjects/githubProject';

const projectList = new ProjectList();
const githubProj = new GithubProject();

describe('Easy Google Maps in Project List', () => {
    projectList.navigateToProjectsList();
    projectList.checkeasyGoogleMapSearchTitle();
    projectList.clickeasyGoogleMapSearchProjectList();
});

describe('Easy Google Maps Project in Github', () => {
  githubProj.checkeasyGoogleMapSearchProjectTitle();
});