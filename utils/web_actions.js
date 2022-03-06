export class WebActions{
  WebActions(){}

  visitLink(link) {
    it(`Vist the url: ${link}`, () => {
      cy.visit(link);
    });
  }

  click(elemTag) {
    it(`Click on ${elemTag}`, () => {
      cy.get(elemTag).invoke('removeAttr', 'target').click();
    });
  }

  assertTextContains(expectedText, elemTag) {
    it(`Assert that ${elemTag} contains the text: ${expectedText}`, () => {
      cy.get(elemTag).contains(expectedText)
    });
  }
}