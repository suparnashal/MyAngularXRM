
const browser_extension = require('../Framework/BrowserExtensions.js');
const LoginPage = require('../Pages/Login.js');

describe('Customer Card Tests', function() {
    it('should have customerid', function() {
      browser.waitForAngularEnabled(false) ;
      browser.manage().timeouts().pageLoadTimeout(20000); 
      //LoginPage.Login();
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
        browser_extension.switchToFrame() ;      
        element(by.xpath('//a[@title="View Customer"]')).click().then(()=>{       
          browser_extension.switchToFrame() ;
          var customerid=element(by.className('left-card-title')) ;                       
          expect(customerid.getText()).toEqual('8008756') ;             
        }) ;     
        //browser.driver.sleep(5000) ; 
        
        }) ;      
          
    });
  });
