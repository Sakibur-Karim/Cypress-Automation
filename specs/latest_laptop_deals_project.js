import {ProjectList} from '../pageObjects/projectList';
import { GithubProject } from '../pageObjects/githubProject';

const projectList = new ProjectList();
const githubProj = new GithubProject();

describe('Latest Laptop Deals in Project List', () => {
    projectList.navigateToProjectsList();
    projectList.checklatestLaptopDealsApiTitle();
    projectList.clicklatestLaptopDealsApiProjectList();
});

describe('Latest Laptop Deals in Github', () => {
  githubProj.checklatestLaptopDealsApiProjectTitle();
});