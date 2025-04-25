const { I } = inject();

class CarsoCursos {
  constructor() {
    this.fields = {
      inicio: "https://capacitatecarso.com/login",
      inputEmail: '//input [@placeholder="Escribe tu email"]',
      email: "gonzagay@globalhitss.com",
      inputPassword: '//input [@placeholder="Escribe tu contraseña"]',
      password: "Lopez031",
      logButton: '//span [text()=" Ingresar "]',
      //helpButton: '//a[text()="Need help logging in?"]'
    };
  }
  iniciolog(){
    I.amOnPage(this.fields.inicio,5);
  }
    credenciales() {
    I.wait(2);
    I.fillField(this.fields.inputEmail, this.fields.email);
    I.fillField(this.fields.inputPassword,this.fields.password);
    I.wait(2);
  }
  loginButton() {
    I.waitForElement(this.fields.logButton, 5);
    I.click(this.fields.logButton);
  }
  verInicio(){
    I.wait(10);
    //I.seeElement(this.fields.helpButton,5);
}
}
module.exports = new CarsoCursos();