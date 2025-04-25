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
      buscar: '//p [text()="Selecciona el curso al que deseas ingresar:"]',
      //curso: '//input [@class="mat-mdc-input-element ng-tns-c1205077789-3 ng-pristine ng-valid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored ng-touched"]',
      //curso: '//label[@class="mdc-floating-label mat-mdc-floating-label ng-tns-c1205077789-1 ng-star-inserted"]',
      curso: '//div[@class="mat-mdc-form-field-infix ng-tns-c1205077789-1"]',
      titlecurso: "Desarrollador"
      
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
  verInicioybuscar(){
    I.wait(5);
    I.scrollTo(this.fields.buscar);
    I.wait(3);
    I.fillField(this.fields.curso,this.fields.titlecurso);
    I.wait(8);
}
}
module.exports = new CarsoCursos();