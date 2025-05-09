const { I } = inject();

class CineFan {
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
     async mainpage(){
       await I.amOnPage(this.fields.main);
        //I.wait(20);
        //{ waitUntil: 'domcontentloaded',timeout: 60000 }
    }
     async ctanueva(){
       await I.waitForElement(this.fields.register,10); 
       await I.click(this.fields.register);
        
    }
     async datosregistro(){
       await I.wait(4);
       await I.fillField(this.fields.email,this.fields.mail);
       await I.fillField(this.fields.user,this.fields.username);
       await I.fillField(this.fields.inputpasswd,this.fields.psswd);
       await I.wait(2);
       
   }
     async continuar(){
       await I.wait(8);
   }
}
module.exports = new CineFan();