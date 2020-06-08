describe('Customer Card Tests', function() {
    it('should have customerid', function() {
      browser.waitForAngularEnabled(false) ;
      browser.manage().timeouts().pageLoadTimeout(20000); 
      browser.get('https://www.car-research.com/WebXRM/');
      element(by.id('txtUserName')).sendKeys('admin');
      element(by.id('txtPassword')).sendKeys('WIN357249crm!');
      element(by.id('txtDealerID')).sendKeys('7132753520');
      element(by.id('btnLogin')).click();
      
      setTimeout(() => {console.log("waiting 2ms..") }, 2000);
      browser.ignoreSynchronization = true;
      expect(browser.getTitle()).toContain('WebXRM');
       //cust# 2772251
       
       element(by.name('rtbQuickSearch')).sendKeys('8008756'+protractor.Key.ENTER).then(()=>
       {
        browser.driver.switchTo().defaultContent();
        expect(element(by.id('_framepage')).waitReady()).toBeTruthy() ;  
        element(by.id('_framepage')).click();
        browser.switchTo().frame(element(by.id('_framepage')).getWebElement());  
        browser.driver.sleep(1000)        ;
        element(by.xpath('//a[@title="View Customer"]')).click().then(()=>{
           
          browser.driver.switchTo().defaultContent();          
          expect(element(by.id('_framepage')).waitReady()).toBeTruthy() ;  
          element(by.id('_framepage')).click();          
          browser.switchTo().frame(element(by.id('_framepage')).getWebElement());   
          browser.driver.sleep(1000)   ;        
          var customerid=element(by.className('left-card-title')) ;                       
          expect(customerid.getText()).toEqual('8008756') ;             
        }) ;     
        //browser.driver.sleep(5000) ; 
        
        }) ;      
          
    });
  });
