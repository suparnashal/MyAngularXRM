
var LoginPage = function (){

    this.userid = element(by.id('txtUserName')) ;
    this.dealerid = element(by.id('txtDealerID')) ;
    this.passwrd = element(by.id('txtPassword')) ;
    this.btnlogin = element(by.id('btnLogin'));

    this.Login=function(){
      browser.waitForAngularEnabled(false) ;
      browser.get('https://www.car-research.com/WebXRM/');
      this.userid.sendKeys('admin');
      this.passwrd.sendKeys('WIN357249crm!');
      this.dealerid.sendKeys('7132753520');
      this.btnlogin.click();
    }
    return this.Login() ;
}

module.exports = new LoginPage();      
    