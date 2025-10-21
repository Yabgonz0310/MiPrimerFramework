const { I } = inject();

class Aseocta {
    constructor(){
        this.fields = {
            cleanmain: 'https://www.glez.mx/',
            cleanaccount: '//a[text()="Crear una cuenta"]',
            inputname: '//input[@name="name"]',
            name: "Yabin",
            inputMail: '//input[@name="email"]',
            nmail: "yabingonzaga0310@gmail.com",
            cleanPhone: '//input[@name="phone"]',
            nphone: '5613760350',
            cleanPass: '//input[@name="password"]',
            nPass: "Lopez0920#",
            okPass: '//input[@name="password_confirmation"]',
            
        };
    }

    clean() {
        I.amOnPage(this.fields.cleanmain,5);
        
    }
    cuentaclean() {
        I.wait(3);
        I.click(this.fields.cleanaccount);
    }

    camposclean() {
        I.wait(2);
        I.fillField(this.fields.inputname,this.fields.name);
        I.fillField(this.fields.inputMail,this.fields.nmail);
        I.fillField(this.fields.cleanPhone,this.fields.nphone);
        I.fillField(this.fields.cleanPass,this.fields.nPass);
        I.fillField(this.fields.okPass,this.fields.nPass);
    }

    viewresult() {
        I.wait(10);
    }
}
module.exports = new Aseocta();