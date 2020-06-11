
const browser_extension = require('../Framework/BrowserExtensions.js');
const LoginPage = require('../Pages/Login.js');

describe('Customer Card Tests', function() {
    it('should have customerid', function() {           
      LoginPage.Login();          
      //setTimeout(() => {console.log("waiting 2ms..") }, 2000);
      browser.ignoreSynchronization = true;
      expect(browser.getTitle()).toContain('WebXRM');
      expect(element(by.name('rtbQuickSearch')).waitReady()).toBeTruthy();                   
       element(by.name('rtbQuickSearch')).sendKeys('8008756'+protractor.Key.ENTER).then(()=>
       {        
        browser_extension.switchToFrame() ;      
        element(by.xpath('//a[@title="View Customer"]')).click().then(()=>{       
          browser_extension.switchToFrame() ;
          var customerid=element(by.className('left-card-title')) ;                       
          expect(customerid.getText()).toEqual('8008756') ;             
        }) ;            
        
        }) ;  
          
    });

    it('',function(){

      
    })
  });
