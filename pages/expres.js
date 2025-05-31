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
      inputrfc: '//td//input[@id="rfc"]',
      rfc: "XAXX010101000",
      comboident: '(//a[@class="ui-widget ui-state-default ui-button-icon-only custom-combobox-toggle ui-corner-right"])[7]',
      comboine: '//select[@id="typeId"]//option[@value="INE"]',
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
      I.click(this.fields.inputcel);
    });
    I.click(this.fields.infocontact);
    I.wait(4);
/*
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.fillField(this.fields.inputcel, this.fields.celular);
      I.fillField(this.fields.confirmarcel, this.fields.celular);
      I.fillField(this.fields.inputteladicional, this.fields.teladic);
      I.fillField(this.fields.inputcorreo, this.fields.alias);
      I.fillField(this.fields.inputdominio, this.fields.domain);
      I.fillField(this.fields.confcorreo, this.fields.alias);
      I.fillField(this.fields.confdominio, this.fields.domain);
      I.wait(3);
      I.waitForElement("#comboRegimen", 5);
      
      I.executeScript(() => {
        const select = document.getElementById("comboRegimen");
        select.value = "RESIDENCIAL";
        select.dispatchEvent(new Event("change"));
      });

    });
*/
/*
within({ frame: '//iframe[@name="kioskoA0"]' }, async () => {
	const page = await playwright.page;
	const frame1 = await page.frame({ name: 'kioskoA0' });
	
      I.fillField(this.fields.inputcel, this.fields.celular);
      I.fillField(this.fields.confirmarcel, this.fields.celular);
      I.fillField(this.fields.inputteladicional, this.fields.teladic);
      I.fillField(this.fields.inputcorreo, this.fields.alias);
      I.fillField(this.fields.inputdominio, this.fields.domain);
      I.fillField(this.fields.confcorreo, this.fields.alias);
      I.fillField(this.fields.confdominio, this.fields.domain);
      I.wait(3);
      I.waitForElement("#comboRegimen", 5);
	  
	  I.executeScript(() => {
        const select = document.getElementById("comboRegimen");
        select.value = "RESIDENCIAL";
        select.dispatchEvent(new Event("change"));
      });
	  
	 const iframeHandle = await frame1.waitForSelector('//iframe[@name="detalleOficinas"]');
     const frame2 = await iframeHandle.contentFrame();
	 await frame2.fill('//td//input[@id="CVE"]', 'WFC');
     I.wait(5);
    });
*/
const { inputcel, celular, confirmarcel, inputteladicional, inputcorreo, dominio, confcorreo, confdominio, teladic, alias, domain } = this.fields;
within({ frame: '//iframe[@name="kioskoA0"]' }, async () => {
	const page = await playwright.page;
	const frame1 = await page.frame({ name: 'kioskoA0' });

	I.fillField(inputcel, celular);
	I.fillField(confirmarcel, celular);
	I.fillField(inputteladicional, teladic);
	I.fillField(inputcorreo, alias);
	I.fillField(inputdominio, domain);
	I.fillField(confcorreo, alias);
	I.fillField(confdominio, domain);
	I.wait(3);
	I.waitForElement("#comboRegimen", 5);

	I.executeScript(() => {
		const select = document.getElementById("comboRegimen");
		select.value = "RESIDENCIAL";
		select.dispatchEvent(new Event("change"));
	});

	const iframeHandle = await frame1.waitForSelector('//iframe[@name="detalleOficinas"]');
	const frame2 = await iframeHandle.contentFrame();
	await frame2.fill('input#CVE', 'WFC');
	I.wait(5);
});

    }
}
module.exports = new AltaRes();
