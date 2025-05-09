const { I } =inject();

class Mitel {
    constructor(){
        this.fields ={
            mitelcel: 'https://www.telcel.com/',
            sesion: '//span[text()="Mi Telcel"]',
            rowaccount: '//a[text()="Regístrate"]',
            inputphone: '//input[@placeholder="A 10 dígitos"]', 
            phone: '5613760357',
        };
    }
    async initpage(){
        await I.amOnPage(this.fields.mitelcel,50);
              I.wait(10);
        
    }
    async cuenta(){
        await I.click(this.fields.sesion);
        I.wait(5);
        I.scrollTo(this.fields.rowaccount);
        I.click(this.fields.rowaccount);
              
    }
    async nvoregistro(){
        I.wait(15);
        I.fillField(this.fields.inputphone,this.fields.phone);
        
    }
    async verinfo(){
        I.wait(5);
    }
}
module.exports = new Mitel();