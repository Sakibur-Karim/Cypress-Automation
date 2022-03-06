import {WebActions} from './../utils/web_actions'
import {ElemTagList} from './../data/elemTags'
import {TestData} from './../data/testData'

export class ProjectList{
  actions = new WebActions();
  elemTags = new ElemTagList();
  testData = new TestData();

  ProjectList(){}

  navigateToProjectsList(){
    this.actions.visitLink(this.testData.projectListUrl);
  }

  checkBankAppTitle(){
    this.actions.assertTextContains(this.testData.bankAccountAppProjectTitle, this.elemTags.bankAccountAppProjectTitle);
  }
  clickBankAppProjectList(){
    this.actions.click(this.elemTags.bankAccountAppProjectLink);
  }

  checktipCalculatorAppTitle(){
    this.actions.assertTextContains(this.testData.tipCalculatorAppProjectTitle, this.elemTags.tipCalculatorAppProjectTitle);
  }
  clicktipCalculatorAppProjectList(){
    this.actions.click(this.elemTags.tipCalculatorAppProjectLink);
  }

  checklatestLaptopDealsApiTitle(){
    this.actions.assertTextContains(this.testData.latestLaptopDealsApiProjectTitle, this.elemTags.latestLaptopDealsApiProjectTitle);
  }
  clicklatestLaptopDealsApiProjectList(){
    this.actions.click(this.elemTags.latestLaptopDealsApiProjectLink);
  }

  checksierpinskiCarpetTitle(){
    this.actions.assertTextContains(this.testData.sierpinskiCarpetProjectTitle, this.elemTags.sierpinskiCarpetProjectTitle);
  }
  clicksierpinskiCarpetProjectList(){
    this.actions.click(this.elemTags.sierpinskiCarpetAppProjectLink);
  }

  checkeasyGoogleMapSearchTitle(){
    this.actions.assertTextContains(this.testData.easyGoogleMapSearchProjectTitle, this.elemTags.easyGoogleMapSearchProjectTitle);
  }
  clickeasyGoogleMapSearchProjectList(){
    this.actions.click(this.elemTags.easyGoogleMapSearchProjectLink);
  }
}