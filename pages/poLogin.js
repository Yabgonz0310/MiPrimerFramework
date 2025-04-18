const { I } = inject();

class LoginPage {
    constructor() {
        this.fields = {
            loginButton: '//a[@aria-label="Login"]',
        }
    }
    clickLoginButton(){
        I.waitForElement(this.fields.loginButton, 5)
        I.click(this.fields.loginButton)
    }



}
//module.exports = new LoginPage();
export default new LoginPage ();