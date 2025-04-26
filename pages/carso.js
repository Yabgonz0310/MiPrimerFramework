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
      element: '(//span[text()="Administración del tiempo"])[2]',
      //curso: '(//div[text()=" Ir al curso "])[45]',
      //titlecurso: "Desarrollador"
      //selectcurso:'(//mat-icon[@class="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"])[46]'
          
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
    I.seeElement(this.fields.element);
    //I.click(this.fields.selectcurso); 
    //Quise seleccionar un curso, una vez que se desplaza el scroll hasta cierto punto, pero al ejecutar el feature, me dice que no se encontro el XPATH
    I.wait(8);
}
}
module.exports = new CarsoCursos();