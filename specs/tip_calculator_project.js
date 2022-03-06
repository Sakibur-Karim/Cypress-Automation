import {ProjectList} from '../pageObjects/projectList';
import { GithubProject } from '../pageObjects/githubProject';

const projectList = new ProjectList();
const githubProj = new GithubProject();

describe('Tip Calculator in Project List', () => {
    projectList.navigateToProjectsList();
    projectList.checktipCalculatorAppTitle();
    projectList.clicktipCalculatorAppProjectList();
  });

describe('Tip Calculator Project in Github', () => {
  githubProj.checktipCalculatorAppProjectTitle();
});