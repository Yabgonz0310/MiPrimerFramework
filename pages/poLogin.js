const { I } = inject();

class poLogin {
    constructor() {
        this.fields = {
            logButton: '//a[@aria-label="Login"]',
        }
    }
    clickLoginButton(){
        I.waitForElement(this.fields.logButton, 5)
        I.click(this.fields.logButton)
    }



}
//module.exports = new LoginPage();
export default new poLogin ();