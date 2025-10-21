const { I } = inject();

class WaltPage {
    constructor() {
        this.fields ={
            principal: "https://www.walmart.com.mx/",
            opcion: '//div[text()="Cuenta"]',
            crearcta: '//button[text()="Iniciar sesión o crear cuenta"]',
            phonemail: '//input[@aria-label="Número telefónico o correo electrónico"]',
            mail: "yabingonzaga0310@gmail.com",
            continue:'//button[@type="submit"]',
            };
    }
    principal(){
        I.amOnPage(this.fields.principal,5);
    }
    clickcrearcta(){
        I.click(this.fields.opcion,2);
        I.click(this.fields.crearcta,2);
    }
    registro(){
        I.wait(4);
        I.fillField(this.fields.phonemail,this.fields.mail)
        I.wait(2);
       
   }
   continuar(){
    I.click(this.fields.continue,5);
   }
}
module.exports = new WaltPage();