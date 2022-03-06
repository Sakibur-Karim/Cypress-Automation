import {WebActions} from './../utils/web_actions'
import {ElemTagList} from './../data/elemTags'
import {TestData} from './../data/testData'

export class GithubProject{
  actions = new WebActions();
  elemTags = new ElemTagList();
  testData = new TestData();

  GithubProject(){}

  checkBankAppProjectTitle(){
    this.actions.assertTextContains(this.testData.bankAccountAppGithubTitle, this.elemTags.githubProjectTitle);
  }

  checktipCalculatorAppProjectTitle(){
    this.actions.assertTextContains(this.testData.tipCalculatorAppGithubTitle, this.elemTags.githubProjectTitle);
  }

  checklatestLaptopDealsApiProjectTitle(){
    this.actions.assertTextContains(this.testData.latestLaptopDealsApiGithubTitle, this.elemTags.githubProjectTitle);
  }

  checksierpinskiCarpetProjectTitle(){
    this.actions.assertTextContains(this.testData.sierpinskiCarpetAppGithubTitle, this.elemTags.githubProjectTitle);
  }

  checkeasyGoogleMapSearchProjectTitle(){
    this.actions.assertTextContains(this.testData.easyGoogleMapSearchGithubTitle, this.elemTags.githubProjectTitle);
  }
}