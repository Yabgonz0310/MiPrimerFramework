const { locator } = require("codeceptjs");

const { I, playwright } = inject();

class AltaRes {
  constructor() {
    this.fields = {
      inicioexp: "http://10.205.76.19/pisagrafico_os3/zntjsp/SVT2502MAIN.jsp",
      frame: '//iframe[@name="kioskoA0"]',
      sinporta: '//div[@id="divAltaSinPorta"]//input[@id="radioSinPorta"]',
      service: '//button[@class="dialog-popup-express-newElement dialog-popup-express-btn btn-border btn-sm "]',
      regimen: '(//a[@class="ui-widget ui-state-default ui-button-icon-only custom-combobox-toggle ui-corner-right"]//span[@class="ui-button-icon-primary ui-icon ui-icon-triangle-1-s"])[4]',
      residencial: '//select[@name="comboRegimen"]//option[@value="RESIDENCIAL"]',
      infocontact: '//div[@class="dialog-popup-express-footer"]//button[@class="dialog-popup-express-newElement dialog-popup-express-btn btn-md "]',
      inputcel: '//div[@id="divCelular"]//input[@id="celular"]',
      celular: 5570510571,
      confirmarcel: '//input[@id="celularConfirm"]',
      inputteladicional: '//td[@id="tdContacto"]//input[@id="telcontacto"]',
      teladic: 7122341281,
      inputcorreo: '(//input[@class="cajaTexto"])[6]',
      alias: "luiz390",
      inputdominio: '//input[@name="comboDominio"]',
      domain: "gmail.com",
      confcorreo: '(//input[@class="cajaTexto"])[7]',
      confdominio: '//input[@name="comboDominioConfirm"]',
      valdatoscontact: '//input[@id="valDatCont"]',
      inputoficina: '//input[@id="CVE"]',
      oficina: "WFC",
      inputnombre: '//td[@id="tdtextnombre"]//input[@type="text"]',
      nombre: "SOFIA",
      inputap: '//td[@id="tdtextapaterno"]//input[@type="text"]',
      apaterno: "FLORES",
      inputam: '//td[@id="tdtextamaterno"]//input[@type="text"]',
      amaterno: "CCP",
      btnfc: '//input[@name="btnRFC"]',
      sinrfc: '//img[@title="Clic para rfc genérico"]',
      btnaceptrfc: '//input[@class="btncontinuar"]',
      comboident: '(//a[@class="ui-widget ui-state-default ui-button-icon-only custom-combobox-toggle ui-corner-right"])[7]',
      msjcliente: '//div[@class="dialog-popup-express-head"]',
      comboine: '//html//body//main//div[3]//div//span//a//span[1]',
      inputine: '//div[@id="data1_1"]//input[@id="numId"]',
      ine: 6745124689125,
      validarine: '//button[@id="btnValidate"]',
      cerrarince: "https://listanominal.ine.mx/scpln/",
      buttonacept: '//button[@id="btnAccept"]',
      inputaddress: '//input[@placeholder="Ingrese dirección..."]',
      direccion: "MOLLENDO 1041",
    };
  }

  async inicioexpress() {
    await I.amOnPage(this.fields.inicioexp);
    await I.wait(10);
  }

  tipoalta() {
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.checkOption(this.fields.sinporta);
      I.wait(7);
    });
  }

  servicio() {
    I.click(this.fields.service);
    I.wait(7);
  }

  datoscliente() {
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.click(this.fields.inputcel)
      I.wait(3)
    });
    I.click(this.fields.infocontact)
    I.wait(4)

    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.fillField(this.fields.inputcel, this.fields.celular)
      I.fillField(this.fields.confirmarcel, this.fields.celular)
      I.fillField(this.fields.inputteladicional, this.fields.teladic)
      I.fillField(this.fields.inputcorreo, this.fields.alias)
      I.fillField(this.fields.inputdominio, this.fields.domain)
      I.fillField(this.fields.confcorreo, this.fields.alias)
      I.fillField(this.fields.confdominio, this.fields.domain)
      I.wait(3)
      I.waitForElement("#comboRegimen", 5);
      
      I.executeScript(() => {
        const select = document.getElementById("comboRegimen");
        select.value = "RESIDENCIAL";
        select.dispatchEvent(new Event("change"));
      });
      I.wait(3)

      I.switchTo('//iframe[@name="detalleOficinas"]')
      I.waitForElement(this.fields.inputoficina)
      I.fillField(this.fields.inputoficina, this.fields.oficina)
      I.switchTo()
      I.wait(3)
      });
  
      //Llenar campos de nombre, Ap, Am y validar datos contacto
      within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.fillField(this.fields.inputnombre, this.fields.nombre,2)
      I.fillField(this.fields.inputap, this.fields.apaterno,2)
      I.fillField(this.fields.inputam, this.fields.amaterno,4)
      I.wait(5)
      I.click(this.fields.valdatoscontact)
      I.wait(4)
      I.click(this.fields.btnfc)
      I.wait(4)
            
      //Pendiente scroll para mostrar ventana de RFC
      I.switchTo('//iframe[@id="dialog-body"]')
      I.wait(3)
      I.waitForElement(this.fields.sinrfc)
      I.wait(7)
      I.click(this.fields.sinrfc)
      I.wait(3)
      I.click(this.fields.btnaceptrfc)
      I.switchTo()
      I.wait(4)
});
      //pause()
      //Tipo de Identificación
      within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.click(this.fields.comboident)
      I.wait(4)
});
      //Mostrar ventana del tipo de identificación
      I.waitForElement(this.fields.msjcliente)
      I.wait(3)
      within({ frame: '(//body[@onunload]//iframe)[1]' }, () => {
      I.click(this.fields.comboine)
      I.wait(6)
//Selecciona alguna opción del combo Tipo de identificación
    /*
    I.executeScript(() => {
  const select = document.getElementById("cboxtypeId");
  if (select) {
    select.value = "INE";
    ['input', 'change', 'blur'].forEach(evtType => {
      const evt = new Event(evtType, { bubbles: true });
      select.dispatchEvent(evt);
    });
  }
});*/
      I.executeScript(() => {
        const select = document.getElementById("cboxtypeId");
        select.value = "INE";
        select.dispatchEvent(new Event("change"));
      });

      I.wait(3)
//Desactiva la clase que inhabilita el botón de validar
I.executeScript(() => {
  const btn = document.getElementById("btnValidate");
  if (btn) {
    btn.classList.remove('btn-disabled-express'); // Elimina la clase que lo desactiva
    btn.disabled = false; // Si estuviera deshabilitado por atributo
  }
});
      I.wait(5)
      I.fillField(this.fields.inputine, this.fields.ine,3)
      I.click(this.fields.validarine)
      I.wait(7)
      I.closeOtherTabs() //https://listanominal.ine.mx/scpln/
      I.wait(6)
      I.click(this.fields.buttonacept)
      I.wait(3)

      })
     

     
        
  }
  
}
module.exports = new AltaRes();
