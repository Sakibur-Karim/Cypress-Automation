import {ProjectList} from '../pageObjects/projectList';
import { GithubProject } from '../pageObjects/githubProject';

const projectList = new ProjectList();
const githubProj = new GithubProject();

describe('Sierpinski Carpet in Project List', () => {
    projectList.navigateToProjectsList();
    projectList.checksierpinskiCarpetTitle();
    projectList.clicksierpinskiCarpetProjectList();
});

describe('Sierpinski Carpet Project in Github', () => {
  githubProj.checksierpinskiCarpetProjectTitle();
});