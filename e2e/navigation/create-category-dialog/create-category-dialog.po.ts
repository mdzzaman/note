import { browser, by, element } from 'protractor';

export class CreateCategoryDialogPage {
  clickOnAddCategory(position){
    browser.debugger();
    element(by.css('.mat-list-item'))[3].click();
    browser.pause();
  }
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
