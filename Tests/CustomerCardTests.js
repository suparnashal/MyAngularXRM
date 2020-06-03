describe('Customer Card Tests', function() {
    it('should have customerid', function() {
      browser.waitForAngularEnabled(false) ;
      browser.get('https://www.car-research.com/WebXRM/');
      element(by.id('txtUserName')).sendKeys('admin');
      element(by.id('txtPassword')).sendKeys('WIN357249crm!');
      element(by.id('txtDealerID')).sendKeys('7132753501');
      element(by.id('btnLogin')).click();
      
      setTimeout(() => {console.log("waiting 2ms..") }, 2000);
      expect(browser.getTitle()).toContain('WebXRM');
       //cust# 2772251
       element(by.name('rtbQuickSearch')).sendKeys('2772251') ;
       
    //browser.driver.findElement(by.linkText('About Us')).click();
       element(by.linkText('2772251')).click();
    });
  });