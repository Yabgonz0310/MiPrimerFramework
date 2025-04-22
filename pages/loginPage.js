const { I } = inject();

class LoginPage {
  constructor() {
    this.fields = {
      logButton: '//a[@aria-label="Login"]',
      inputEmail: '//input [@placeholder="email address"]',
      email: "yabingonzaga0310@gmail.com",
      inputPassword: '//input [@placeholder="password"]',
      password: "Ejemplo0920#",
      helpButton: '//a[text()="Need help logging in?"]'
    };
  }
  clickLoginButton() {
    I.waitForElement(this.fields.logButton, 5);
    I.click(this.fields.logButton);
  }
  ingcredenciales() {
    I.wait(5);
    I.fillField(this.fields.inputEmail, this.fields.email);
    I.fillField(this.fields.inputPassword,this.fields.password);
    I.wait(2);
  }
  verBtnAyuda(){
    I.seeElement(this.fields.helpButton,5);
  }
}
module.exports = new LoginPage();
