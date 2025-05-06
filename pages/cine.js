const { I } = inject();

class cineFan {
    constructor() {
        this.fields ={
            main: "https://www.filmaffinity.com/mx/main.html",
            register: '//a[@class="register"]',
            email: '//input[@id="emailInput"]',
            mail: "yabingonzaga0310@gmail.com",
            user: '//input[@id="usernameInput"]',
            username: "Ujean",
            inputpasswd: '//input[@id="password1"]',
            psswd: "Lopez0920#"
            //continue:'//input[@value="registrarse"]',
            };
    }
    mainpage(){
        I.amOnPage(this.fields.main,{ waitUntil: 'domcontentloaded',timeout: 60000 });
        //I.wait(20);
    }
    ctanueva(){
        I.click(this.fields.register,10);
        
    }
    datosregistro(){
        I.wait(4);
        I.fillField(this.fields.email,this.fields.mail);
        I.fillField(this.fields.user,this.fields.username);
        I.fillField(this.fields.inputpasswd,this.fields.psswd);
        I.wait(2);
       
   }
   continuar(){
    I.wait(8);
   }
}
module.exports = new cineFan();