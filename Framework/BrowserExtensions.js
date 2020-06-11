
module.exports = {

switchToFrame: function() {
    browser.driver.switchTo().defaultContent();
    expect(element(by.id('_framepage')).waitReady()).toBeTruthy() ;  
    element(by.id('_framepage')).click();
    browser.switchTo().frame(element(by.id('_framepage')).getWebElement());  
    browser.driver.sleep(1000)        ;
}

}