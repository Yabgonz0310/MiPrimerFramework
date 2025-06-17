const { locator } = require("codeceptjs");

const { llenarDatos } = require('../metodos/completarinfo');
const { I, playwright } = inject();
class AltaRes {
  constructor() {
    this.fields = {
      inicioexp: "http://10.205.76.19/pisagrafico_os3/zntjsp/SVT2502MAIN.jsp",
      frame: '//iframe[@name="kioskoA0"]',
      sinporta: '//div[@id="divAltaSinPorta"]//input[@id="radioSinPorta"]',
      service:
        '//button[@class="dialog-popup-express-newElement dialog-popup-express-btn btn-border btn-sm "]',
      regimen:
        '(//a[@class="ui-widget ui-state-default ui-button-icon-only custom-combobox-toggle ui-corner-right"]//span[@class="ui-button-icon-primary ui-icon ui-icon-triangle-1-s"])[4]',
      residencial:
        '//select[@name="comboRegimen"]//option[@value="RESIDENCIAL"]',
      infocontact:
        '//div[@class="dialog-popup-express-footer"]//button[@class="dialog-popup-express-newElement dialog-popup-express-btn btn-md "]',
      inputcel: '//div[@id="divCelular"]//input[@id="celular"]',
      celular: 5570510581,
      confirmarcel: '//input[@id="celularConfirm"]',
      inputteladicional: '//td[@id="tdContacto"]//input[@id="telcontacto"]',
      teladic: 7122341281,
      inputcorreo: '(//input[@class="cajaTexto"])[6]',
      alias: "luiz400",
      inputdominio: '//input[@name="comboDominio"]',
      domain: "gmail.com",
      confcorreo: '(//input[@class="cajaTexto"])[7]',
      confdominio: '//input[@name="comboDominioConfirm"]',
      valdatoscontact: '//input[@id="valDatCont"]',
      inputoficina: '//input[@id="CVE"]',
      oficina: "WFC",
      inputnombre: '//td[@id="tdtextnombre"]//input[@type="text"]',
      nombre: "FRIDA ARANZA",
      inputap: '//td[@id="tdtextapaterno"]//input[@type="text"]',
      apaterno: "FRAUSTO",
      inputam: '//td[@id="tdtextamaterno"]//input[@type="text"]',
      amaterno: "CCPS",
      btnfc: '//input[@name="btnRFC"]',
      sinrfc: '//img[@title="Clic para rfc genérico"]',
      btnaceptrfc: '//input[@class="btncontinuar"]',
      comboident:
        '(//a[@class="ui-widget ui-state-default ui-button-icon-only custom-combobox-toggle ui-corner-right"])[7]',
      msjcliente: '//div[@class="dialog-popup-express-head"]',
      comboine: "//html//body//main//div[3]//div//span//a//span[1]",
      inputine: '//div[@id="data1_1"]//input[@id="numId"]',
      ine: 6745124689125,
      validarine: '//button[@id="btnValidate"]',
      cerrarince: "https://listanominal.ine.mx/scpln/",
      buttonacept: '//button[@id="btnAccept"]',
      //Dirección
      inputaddress: '//input[@placeholder="Ingrese dirección..."]',
      direccion: "RIBERA 20, LOS ALPES",
      btnsearch: '//input[@class="sb-search-submit"]',
      confmap: '//a[@id="idValCober"]',
      //Complemento domicilio
      inputcol: '//input[@id="cboxColonia"]',
      col: "AMPLIACION  LOS ALPES", //No se ocupa de momento
      inputcp: '//input[@id="cboxCodigoPostal"]',
      cp: "01710", // Si el CP inicia con 0, se deja con comillas dobles, en caso contrario no se ocupan
      combocalle:
        '(//span[@class="ui-button-icon-primary ui-icon icon-triangle-express"])[6]',
      inputtpc: '//input[@id="cboxcombotipocalle"]',
      tpcalle: "CALLE",
      inputcalle: '//input[@id="idCalle"]',
      calle: "RIBERA",
      inputnext: '//input[@id="idNumeroExterior"]',
      numbercalle: '',
      inputcalif: '//input[@id="idCalificador"]',
      calif: "",
      inputsn: '//input[@id="idsubnumero"]',
      subnumber: '',
      inputmanzana: '//input[@id="idManzana"]',
      manzana:'',
      inputlote: '//input[@id="idLote"]',
      lote: '',
      inputedif: '//input[@id="idEdificio"]',
      edif:"",
      inputdept: '//input[@id="idDepartamento"]',
      dep: '',
      inpute1: '//input[@id="idEntreCalle1"]',
      e1: "CALZ DE LAS AGUILAS",
      inpute2: '//input[@id="idEntreCalle2"]',
      e2: "M GUTIERREZ ZAMORA",
      confdom: '//a[@id="idBtnConsultaDom"]',
      //Confirmar Dom instalación
      dominst: '//div[@id="dialog-Mapa"]',
      domok: '(//button[@class="ui-button ui-corner-all ui-widget boton"])[2]',
      btncontrata: '//input[@id="btninfoydom"]',
      //GI
      btngi: '//td[@id="tdMsjGI"]',
      btncontinuar: '[name="Continuar"]',
      //Paquetes
      contenedorpqts: 'id="contenedorOferta"',
      servpqt: '[id="chkServPqte"]', //DoblePlay
      servnaked: '[id="chkServNaked"]', //Naked
      servlin: '[id="chkServLinea"]', //Solo voz
      pqt1: '(//button[@id="botonContratar"])[1]', //PQI53 15 MBS
      pqt2: '(//button[@id="botonContratar"])[2]', //INF19 80 MBS
      pqt3: '(//button[@id="botonContratar"])[3]', //PQI42 100 MBS
      pqt4: '(//button[@id="botonContratar"])[4]', //PQI43 150 MBS
      btnsig: '//span[text()="Siguiente"]',
      btnant: '//span[text()="Anterior"]',
      pqt5: '(//button[@id="botonContratar"])[5]', //PQI32 250 MBS
      pqt6: '(//button[@id="botonContratar"])[6]', //PQI64 350 MBS
      pqt7: '(//button[@id="botonContratar"])[7]', //PQI25 750 MBS
      pqt8: '(//button[@id="botonContratar"])[8]', //PQI70 UNKNOWN MBS
      pqt9: '(//button[@id="botonContratar"])[9]', //PQI62 1000 MBS - 1GB
      btns: '[id="divBotones"]',
      btnoffer: '//input[@id="Corrida"]',

      //Oferta comercial: se muestra ventana flotante con la velocidad del paquete seleccionado
      windowmolecula: '//iframe[@id="idIfrmMolecula"]',
      //GI Pago inicial y pago único
      rdbtnGI: '[id="radioGastosD"]', //radio btn GI
      comboGI:
        '(//span[@class="ui-button-icon-primary ui-icon ui-icon-triangle-1-s"])[4]',
      btndomiciliacion: '[id="chkDomiciliacion"]', //Desactivar check domiciliación

      //Campos Domiciliación
      apdom: '//body[@onload="cargaPantalla();"]//input[@id="apaterno"]',
      amdom: '//body[@onload="cargaPantalla();"]//input[@id="amaterno"]',
      nombredom: '//body[@onload="cargaPantalla();"]//input[@id="nombre"]',
      celdom: '//body[@onload="cargaPantalla();"]//input[@id="celular"]',
      maildom: '//body[@onload="cargaPantalla();"]//input[@id="correo"]',
      mail: "yabingonzaga0310@gmail.com",
      aceptdom: '//body[@onload="cargaPantalla();"]//button[@id="btnAceptar"]',
      continuarpqt: '[id="Continuar"]', //Continua a la pantalla de facturación

      //Facturación
      cpFact: '//td//input[@id="cpFact"]',
      btnContratar: '[id="btninfoydom"]',

      //Catálogo Equipos de cobertura
      btnencuesta:
        '[class="dialog-popup-express-newElement dialog-popup-express-btn btn-md "]',
      //PUV EQUIPOS MESH
      btneqcob: '[id="btEncuesta"]',
      //PUV Encuesta Cobertura
      btnch: '//label//input[@value="1"]',
      btnmed: '//label//input[@value="2"]',
      btngde: '//label//input[@value="3"]',
      btnxl: '//label//input[@value="4"]',
      btnregresar: '//tr[@id="btnEncuestaS"]//input[@value="Regresar"]',
      btnContEncuesta: '//tr[@id="btnEncuestaS"]//input[@value="Continuar"]', // Se reutiliza en la pregunta 2
      //Pregunta 2
      btnsi: '//tr[@id="btnEncuesta"]//input[@value="1"]',
      btnno: '//tr[@id="btnEncuesta"]//input[@value="2"]',
      Btnfinencuesta: '//div[@id="divPregunta"]//button[@id="btnOK"]',

      //PUV MESH debes entrar al KIOSKO/ifr_ContratPuv / y : '//iframe[@id="fmCat"]' para seleccionar productos de esta pantalla
      btnterminar: '[id="btnTerminar"]',
      btnagregar:
        '(//div[@class="ui-dialog-buttonset"]//span[@class="ui-button-text"])[1]', //¿Desea Agregar Algún Aparato Telefónico A La Orden? - Si
      btnnoagregar:
        '(//div[@class="ui-dialog-buttonset"]//span[@class="ui-button-text"])[2]', //No desea productos
      //Motivos
      mot1: '(//td//input[@name="motivo"])[1]', // Precio elevado
      mot2: '(//td//input[@name="motivo"])[2]', // Presupuesto
      mot3: '(//td//input[@name="motivo"])[3]', //YA CUENTA CON UN SERVICIO/PRODUCTO DE LA COMPETENCIA
      mot4: '(//td//input[@name="motivo"])[4]', //YA CUENTA CON EL SERVICIO/PRODUCTO TELMEX
      mot5: '(//td//input[@name="motivo"])[5]', //NO ESTÁ INTERESADO EN LA OFERTA
      mot6: '(//td//input[@name="motivo"])[6]', //CLIENTE REQUIERE TIEMPO/CONSULTA
      mot7: '(//td//input[@name="motivo"])[7]', //CLIENTE CON QUEJAS
      mot8: '(//td//input[@name="motivo"])[8]', //ESTÁ SATISFECHO CON SU PRODUCTO/SERVICIO ACTUAL
      mot9: '(//td//input[@name="motivo"])[9]', //EL CLIENTE NO CUMPLE CONDICIONES
      btncancelmov: '[id="btnCancelar"]',
      btnContmov: '//button[text()="Continuar"]',
      //Catálogo teléfonos
      btntelcerrar:
        '[class="dialog-popup-express-newElement dialog-popup-express-btn btn-border btn-md "]', //Cerrar pregunta
      btntelacept:
        '[class="dialog-popup-express-newElement dialog-popup-express-btn btn-md "]', //Abrir PUV Tels
      //Catálogo Tecnología
      btnteccerrar:
        '[class="dialog-popup-express-newElement dialog-popup-express-btn btn-border btn-md "]', //Cerrar pregunta
      btntecacept:
        '[class="dialog-popup-express-newElement dialog-popup-express-btn btn-md "]', //Abrir PUV Tecnología
      //Adicionales
      btnadicsalir: '[id="btnSalir"]',
      //Msj GI Pago inicial
      giPi: '[class="dialog-popup-express-newElement dialog-popup-express-btn btn-md "]',
      //GeneraOS
      folioOS:'[id="folSolKio"]',
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
    I.wait(10);
  }

  datoscliente() {
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.click(this.fields.inputcel);
      I.wait(3);
    });
    I.click(this.fields.infocontact);
    I.wait(4);
    //Llenar campos de delular, correo, tel adicional y la confirmación de los mismos
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
      //Selección del régimen
      I.executeScript(() => {
        const select = document.getElementById("comboRegimen");
        select.value = "RESIDENCIAL";
        select.dispatchEvent(new Event("change"));
      });
      I.wait(3);
      //Ingresar al frame "Detalle oficinas" para seleccionar la oficina
      I.switchTo('//iframe[@name="detalleOficinas"]');
      I.waitForElement(this.fields.inputoficina);
      I.fillField(this.fields.inputoficina, this.fields.oficina);
      I.switchTo();
      I.wait(3);
    });

    //Llenar campos de nombre, Ap, Am y validar datos contacto
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.fillField(this.fields.inputnombre, this.fields.nombre, 2);
      I.fillField(this.fields.inputap, this.fields.apaterno, 2);
      I.fillField(this.fields.inputam, this.fields.amaterno, 4);
      I.wait(3);
      I.click(this.fields.valdatoscontact);
      I.wait(2);
      I.click(this.fields.btnfc);
      I.wait(4);
      //Scroll para navegar a la altura del mapa para captura del RFC
      I.executeScript(() => {
        document.querySelector('[id="fr_domicilio"]').scrollIntoView();
      });

      //Ingresar a un segundo iframe desde el iframe KioskoA0
      //Pendiente scroll para mostrar ventana de RFC
      I.switchTo('//iframe[@id="dialog-body"]');
      I.wait(3);
      I.waitForElement(this.fields.sinrfc);
      I.wait(5);
      I.click(this.fields.sinrfc);
      I.wait(3);
      I.click(this.fields.btnaceptrfc);
      I.switchTo();
      I.wait(2);
    });
    //iFrame de Kiosko
    //Tipo de Identificación
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.click(this.fields.comboident);
      I.wait(2);
    });
    //Para mostrar ventana del tipo de identificación, ingresar al frame
    I.waitForElement(this.fields.msjcliente);
    I.wait(2);
    within({ frame: "(//body[@onunload]//iframe)[1]" }, () => {
      I.click(this.fields.comboine);
      I.wait(1);
      //Selecciona alguna opción del combo Tipo de identificación
      I.executeScript(() => {
        const select = document.getElementById("cboxtypeId");
        select.value = "INE";
        select.dispatchEvent(new Event("change"));
      });

      I.wait(2);
      //Desactiva la clase que inhabilita el botón de validar
      I.executeScript(() => {
        const btn = document.getElementById("btnValidate");
        if (btn) {
          btn.classList.remove("btn-disabled-express"); // Elimina la clase que lo desactiva
          btn.disabled = false; // Si estuviera deshabilitado por atributo
        }
      });
      I.wait(3);
      I.fillField(this.fields.inputine, this.fields.ine, 3);
      I.click(this.fields.validarine);
      I.wait(7);
      I.closeOtherTabs(); //https://listanominal.ine.mx/scpln/
      I.wait(6);
      I.click(this.fields.buttonacept);
      I.wait(1);
    }); //termina interacción con el Within Tipo de identificación

    //Inresar a un 3er iframe para captura del domicilio desde Kiosko A0 solo para capturar el domicilio y buscarlo para después salir a la página principal
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.switchTo('//iframe[@id="fr_domicilio"]');
      I.switchTo('//iframe[@name="frameUno"]');
      I.wait(1);
      I.fillField(this.fields.inputaddress, this.fields.direccion);
      I.click(this.fields.btnsearch);
      I.wait(3);
      I.click(this.fields.confmap);
      I.wait(6);
      I.switchTo();
    });

    //Ingresar al frame KioskoA0 para desplazarnos a los campos de la dirección
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.switchTo('//iframe[@id="fr_domicilio"]');
      //Desplazar a los campos
      I.executeScript(() => {
        document.querySelector('[id="ifDos"]').scrollIntoView();
      });
      //ingresar al 2do frame, donde se encuentran los campos
      I.switchTo('//iframe[@name="frameDos"]');
      I.wait(3);
      //pause()
      llenarDatos(I, this.fields.inputtpc, this.fields.tpcalle)
      I.pressKey("Enter");
      llenarDatos(I, this.fields.inputcalle, this.fields.calle)
      llenarDatos(I, this.fields.inputnext, this.fields.numbercalle)    
      llenarDatos(I, this.fields.inputcalif, this.fields.calif)
      llenarDatos(I, this.fields.inputsn, this.fields.subnumber)
      llenarDatos(I, this.fields.inputmanzana, this.fields.manzana)
      llenarDatos(I, this.fields.inputlote, this.fields.lote)
      llenarDatos(I, this.fields.inputedif, this. fields.edif)
      llenarDatos(I, this.fields.inputdept, this.fields.dep)
      llenarDatos(I, this.fields.inpute1, this.fields.e1)
      llenarDatos(I, this.fields.inpute2, this.fields.e2)
      I.wait(1);
      I.click(this.fields.confdom);
      I.wait(3);
      I.switchTo();
    });
    //pause()
    //Ingresar al frame uno a tráves del KioskoA0 para la pregunta El Domicilio que ha seleccionado en el mapa es el Domicilio donde se realizará la instalación?
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.switchTo('//iframe[@id="fr_domicilio"]');

      I.executeScript(() => {
        document.querySelector('[id="ifUno"]').scrollIntoView();
      });

      I.switchTo('//iframe[@name="frameUno"]');
      I.wait(1);
      I.click(this.fields.domok);
      I.wait(10);
      I.switchTo();
    });
    //Clic a Contratar
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.wait(2);
      I.click(this.fields.btncontrata);
    });
    I.wait(10);
    I.click(this.fields.btncontinuar);
    I.wait(20);
  }

  //Oferta comercial
  oferta() {
    I.wait(10);
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.switchTo('[id="ofertaPlanes"]');
      I.click(this.fields.servpqt);
      I.click(this.fields.pqt2);
      I.wait(2);

      I.executeScript(() => {
        document.querySelector('[id="selProdReq"]').scrollIntoView();
      });
      I.switchTo();
    });

    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.wait(3);
      I.click(this.fields.btnoffer);
      I.wait(5);
      I.closeOtherTabs(); //Oferta comercial
      I.wait(2);
      I.click(this.fields.rdbtnGI);
      I.wait(1);
      //I.click(this.fields.btndomiciliacion) -- No borrar, si se requiere desactivar el check de Domiciliación
      I.click(this.fields.continuarpqt);
    });
    within({ frame: '[id="frameD"]' }, () => {
      I.wait(5);
      I.fillField(this.fields.apdom, this.fields.apaterno);
      I.fillField(this.fields.amdom, this.fields.amaterno);
      I.fillField(this.fields.nombredom, this.fields.nombre);
      I.fillField(this.fields.celdom, this.fields.celular);
      I.fillField(this.fields.maildom, this.fields.mail);
      I.click(this.fields.aceptdom);
      I.wait(5);
    });
  }
  //Facturación: Cambio de CP
  facturacion() {
    I.wait(1);
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.switchTo('[id="catEstado"]');
      I.wait(3);
      I.fillField(this.fields.cpFact, this.fields.cp);
      I.wait(2);
      I.switchTo();
    });

    I.wait(2);
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.wait(2);
      I.click(this.fields.btnContratar);
      I.wait(110); //Tiempo para avanzar a la pantalla del PUV, aquí ya genera la OS
      //I.wait(50)
    });
    I.wait(5);
    I.click(this.fields.btnencuesta);
    I.wait(65);
    //I.waitForElement('//iframe[@name="kioskoA0"]',65)
    //Entrar al frame PUV para iniciar la encuesta
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.wait(2);
      I.switchTo('[id="ifrContrataPUV"]');
      I.wait(10);
      I.switchTo('[id="ifPantMCob"]');
      I.click(this.fields.btneqcob);
      I.wait(5);
      I.switchTo();
    });
    //Ingresar al frame Cuestionario de Cobertura
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.wait(20);
      I.switchTo('[id="ifrContrataPUV"]');
      I.switchTo('[id="ifPantQuizz"]');
      I.click(this.fields.btnmed);
      I.click(this.fields.btnContEncuesta);
      I.wait(5);
      I.click(this.fields.btnsi);
      I.click(this.fields.btnContEncuesta);
      I.wait(4);
      I.click(this.fields.btnContEncuesta);
      I.wait(3);
      I.click(this.fields.Btnfinencuesta);
      I.wait(30);
      I.switchTo();
    });
    //Ingresar al PUV y no seleccionar productos
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
      I.wait(5);
      I.switchTo('//iframe[@id="ifrContrataPUV"]');
      I.wait(3);
      I.click(this.fields.btnterminar);
      I.wait(3);
      I.click(this.fields.btnnoagregar);
      I.wait(7);
      //Seleccionar motivos
      I.switchTo('//iframe[@id="frameEncuesta"]');
      I.wait(3);
      I.click(this.fields.mot1);
      I.wait(1);
      I.click(this.fields.btnContmov);
      I.switchTo();
      I.wait(5);
    });
    //Cierre de preguntas 
    I.click(this.fields.btntelcerrar); //Telefonía
    I.wait(4);
    I.click(this.fields.btnteccerrar); //Tecnología
    I.wait(8);
  }
//Pantalla antes de mostrar OS
  adicionales() {
    within({ frame: '//iframe[@name="kioskoA0"]' }, () => {
    I.wait(5)
    I.switchTo('//iframe[@id="adicionales"]')
    I.click(this.fields.btnadicsalir)
    I.wait(15)
    I.switchTo()
    });
  }

  async generaos(){
    //Msj GI Pago inicial
    I.click(this.fields.giPi)
    I.wait(15)
    pause()
    const { page } = await I.getContext();
    const [ download ] = await Promise.all([
      page.waitForEvent('download'),
      page.waitForTimeout(3000),
    ]);

    const path = await download.path();
    const suggestedFilename = download.suggestedFilename();
    console.log('Archivo descargado: ${path} como ${suggestedFilename}')    
    I.wait(4)
    }

}
module.exports = new AltaRes();
