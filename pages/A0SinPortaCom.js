const {I} = inject();
const ejecucionesMultiples = require("../Metodos/metodos");

class A0SinPortaCom {
    constructor() {
        //Declaración de variables
        this.fields = {

            //VARIBLES MENU PRINCIPAL Y 1.DATOS CLIENTE

            //Combos
            regimenCombo: 'comboRegimen',
            DATOSregimenCombo: 'COMERCIAL',
            //datos pantalla tipo de porta
            LNSinPorta: '[id="radioSinPorta"]',
            masd1serv: '[class="dialog-popup-express-newElement dialog-popup-express-btn btn-border btn-sm "]',
            //datos popup "Información de Contactos"
            popupserv: '[class="dialog-popup-express display-flex"]',
            popupservAcp: '[class="dialog-popup-express-newElement dialog-popup-express-btn btn-md "]',
            //Datos de contacto
            celularcliente: '//div[@id="divCelular"]//input[@id="celular"]',
            confirmaCelular: '//div[@id="divCelularConfirm"]//input[@id="celularConfirm"]',
            DATOScelularcliente: '5571231219',
            telcontacto: '//td[@id="tdContacto"]//input[@id="telcontacto"]',
            DATOStelcontacto: '6647362833',
            nombreCorreo: '//div[@align="left"]//input[@id="email"]',
            DATOSnombreCorreo: 'ccp.test0_19',
            dominioCorreo: '//div[@align="left"]//input[@id="comboDominio"]',
            DATOSdominioCorreo: 'mail.com',
            nombreCorreoConf: '//div[@align="left"]//input[@id="emailConfirm"]',
            dominioCorreoConf: '//div[@align="left"]//input[@id="comboDominioConfirm"]',
            validaDatosCliente: '[id="valDatCont"]',
            //Datos empresa
            regimen: '(//a[@class="ui-widget ui-state-default ui-button-icon-only custom-combobox-toggle ui-corner-right"]//span[@class="ui-button-icon-primary ui-icon ui-icon-triangle-1-s"])[4]',
            oficina: '[id="CVE"]',
            DATOSoficina: 'WFC',
            nombreCom: '[id="nombreInformacion"]',
            DATOSnombreCom: 'Prueba comercial',
            nombreFactCom: '[id="nombreFacturacion"]',
            DATOSnombreFactCom: 'Prueba comercial fact',
            //Datos empresa - RFC
            botonRFC: '[id="btnRFC"]',
            popupRFC: '[id="th_tabla"]',
            sinRFC: '[title="Clic para rfc genérico"]',
            continuarRFC: '[id="btnContinuar"]',
            giro: '(//a[@class="ui-widget ui-state-default ui-button-icon-only custom-combobox-toggle ui-corner-right"])[6]',
            DATOSgiro: 'ABARROTES',
            //Datos empresa - Identificación
            tipoIdentificacion: '(//span[@class="ui-button-icon-primary ui-icon ui-icon-triangle-1-s"])[7]',
            popupIdenfiticacion: '[class="dialog-popup-express-container"]',
            popupSelectoID: '//html//body//main//div[3]//div//span//a//span[1]',
            campoID: '(//div[@id="data1_1"])[2]//input[@id="numId"]',
            DATOScampoID: 1234567890123,
            validarID: '[id="btnValidate"]',
            aceptarID: '[id="btnAccept"]',
            //Datos empresa - Responsable
            nombreResp: '[id="nombreResp"]',
            DATOSnombreResp: 'Prueba Responsable,',
            celularResp: '[id="numCelResp"]',
            DATOScelularResp: 5571231219,
            //Datos de Dirección
            direccion: '[id="locationTextField"]',
            DATOSdireccion: 'Ribera 141 Los Alpes',
            direccionBuscar: '[id="idsearch"]',
            confirMapa: '[id="idValCober"]',
            //Datos de Dirección - correccion y confirmación de datos
            estado: '(//a[@class="ui-widget ui-state-default ui-button-icon-only custom-combobox-toggle ui-corner-right combobox-input-express blanco"])[2]',
            DATOSestado: '',
            mipAlcaldia: '(//a[@class="ui-widget ui-state-default ui-button-icon-only custom-combobox-toggle ui-corner-right combobox-input-express blanco"])[3]',
            DATOSmipAlcaldia: '',
            colonia: '(//a[@class="ui-widget ui-state-default ui-button-icon-only custom-combobox-toggle ui-corner-right combobox-input-express blanco"])[4]',
            DATOScolonia: '',
            cp: '(//a[@class="ui-widget ui-state-default ui-button-icon-only custom-combobox-toggle ui-corner-right combobox-input-express blanco"])[5]',
            DATOScp: '01710',
            tipoCalle: '(//a[@class="ui-widget ui-state-default ui-button-icon-only custom-combobox-toggle ui-corner-right combobox-input-express blanco"])[6]',
            DATOStipoCalle: 'CALLE',
            calle: '[id="idCalle"]',
            DATOScalle: 'RIVERA',
            numEx: '[id="idNumeroExterior"]',
            DATOSnumEx: 141,
            calificador: '[id="idCalificador"]',
            DATOScalificador: '',
            subnumero: '[id="idsubnumero"]',
            DATOSsubnumero: '',
            manzana: '[id="idManzana"]',
            DATOSmanzana: '',
            lote: '[id="idLote"]',
            DATOSlote: '',
            edificio: '[]',
            DATOSedificio: '',
            depto: '[]',
            DATOSdepto: '',
            entreCalle1: '(//input[@id="idEntreCalle1"])[1]',
            DATOSentreCalle1: 'EMBOCADURA',
            entreCalle2: '(//input[@id="idEntreCalle2"])[1]',
            DATOSentreCalle2: 'PARQUE ECOLOGICO AGUILAS',
            referencias: '[]',
            DATOSreferencias: '',
            //Confirmación, memo y continua
            confirmaDom: '[id="idBtnConsultaDom"]',
            domiSI: '(//button[@class="ui-button ui-corner-all ui-widget boton"])[2]',
            memo: '[id="memo"]',
            DATOSmemo: 'TEST MEMO CCP',
            continuarDC: '[id="btninfoydom"]',
            confirmaGI: '[name="Continuar"]',

            //VARIABLES 2.SERVICIOS

            //Datos de paquetes
            tipoServicio: 'ML', //Opciones: 2L, ML, 20
            ts2L: '(//span[@class="checkmarkS"])[1]',
            tsML: '(//span[@class="checkmarkS"])[2]',
            ts20: '(//span[@class="checkmarkS"])[3]',
            primerOferta: '(//button[@id="botonContratar"])[1]',
            validarOferta: '[id="Corrida"]',
            promoCloud: '[id="cloud"]',
            //Datos de servicios adicionales            
            aceptaPromoCloud: 'NO', //Opciones: SI, NO
            pagoGI:'[id="radioGastosD"]',
            domiciliacion: '[id="chkDomiciliacion"]',
            aceptaDomiciliacion: 'SI', //Opciones: SI, NO
            aceptaRT: 'SI', //Opciones: SI, NO
            reciboTlx: '[id="chkPaperless"]',
            continuarSrv: '[id="Continuar"]',
            //Datos de Domiciliacion
            campoAPdom: '//div//input[@id="apaterno"]',
            DATOcampoAPdom: 'APaterno',
            campoAMdom: '//div//input[@id="amaterno"]',
            DATOcampoAMdom: 'AMaterno',
            campoNombreDom: '//div//input[@id="nombre"]',
            DATOcampoNombreDom: 'NCliente',
            campoCelularDom: '//div//input[@id="celular"]',
            DATOcampoCelularDom: '5571231219',
            campoCorreoDom: '//div//input[@id="correo"]',
            DATOcampoCorreoDom: 'fortes20gh@gmail.com',
            aceptaDatosTA: '[id="btnAceptar"]',

            //VARIABLES 3.Facturación

            cuentaMaestra: 'NO', //Opciones: SI, NO
            codInsercion: '(//input[@id="CVE"])[1]',
            DATOcodInsercion: '1311408',
            campoCMaestra: '(//input[@id="CVE"])[2]',
            DATOcampoCMaestra: '',
            cpFacturacion: '[id="cpFact"]',
            contratarFact: '[id="btninfoydom"]',

            //VARIABLES Encuesta y PUV
            continuarCatEqpCob:'[class="dialog-popup-express-newElement dialog-popup-express-btn btn-md "]',
            clienteReqCob: '[id="btEncuesta"]',
            //VARIABLES Encuesta y PUV - Encuesta de cobertura
            cobP1: 'CHICO', //Opc: CHICO, MEDIANO, GRANDE, EXTRAGRANDE
            cobP1R1: '//div[@id="question-container"]//input[@value="1"]',
            cobP1R2: '//div[@id="question-container"]//input[@value="2"]',
            cobP1R3: '//div[@id="question-container"]//input[@value="3"]',
            cobP1R4: '//div[@id="question-container"]//input[@value="4"]',
            cobP1Continuar: '//tr[@id="btnEncuestaS"]//input[@value="Continuar"]',
            cobP2: 'NO', //Opc: SI, NO
            cobP2R1: '//div[@class="radio-container"]//input[@value="1"]',
            cobP2R2: '//div[@class="radio-container"]//input[@value="2"]',
            cobP2Continuar: '//tr[@id="btnEncuestaS"]//input[@value="Continuar"]',
            cobP3: 'SI', //Opc: SI, NO
            cobP3R1: '//div[@id="question-container"]//input[@value="1"]',
            cobP3Continuar: '//tr[@id="btnEncuestaS"]//input[@value="Continuar"]',
            noRequiereCob: '//body[@class="claro"]//div[@id="dialogPregunta"]',
            OKnoRequiereCob: '[name="btnOK"]',
            //VARIABLES Encuesta y PUV - PUV
            PUVTerminar: '[id="btnTerminar"]',
            ventanaDeseaAparato: '[aria-describedby="dialog-confirm"]',
            DeseaAparato: 'NO', //Opc: SI, NO
            DeseaAparatoSI: '(//div[@class="ui-dialog-buttonset"]//button[@role="button"])[1]',
            DeseaAparatoNO: '(//div[@class="ui-dialog-buttonset"]//button[@role="button"])[2]',
            ventanaMotivo: '[id="divCatMotivos"]',
            motivo: '(//td[@id="tdSel"]//input[@id="motivo"])[5]',
            motivoContinuar: '//body[@class="tundra"]//button[@id="btnCont"]',
            //VARIABLES Encuesta y PUV - Casa Inteligente
            deseaCasaInt: 'NO', //Opc: SI, NO
            deseaCasaIntNO: '[class="dialog-popup-express-newElement dialog-popup-express-btn btn-border btn-md "]',
            deseaCasaIntSI: '[class="dialog-popup-express-newElement dialog-popup-express-btn btn-md "]',
            //VARIABLES Encuesta y PUV - Servicios Adicionales
            formaAdicionales: '[id="forma"]',
            salirSA: '[id="btnSalir"]',

            //VARIABLES 4.Cierre de solicitud
            confirmaGIcierre: '[class="dialog-popup-express-container"]'
        }
    }

// Menu inicial de Alta Express, se elige: Linea Nueva Sin Portabilidad
    MenuPrincipal(){
        I.wait(3)
        within({frame: ['[id="kioskoA0"]']}, () => {
            I.wait(3)
            I.click(this.fields.LNSinPorta)
        });
        //I.wait(3)
        I.waitForElement(this.fields.popupserv, 5)
        I.click(this.fields.masd1serv)
        I.wait(10) //Tiempo de espera estimado para llegar a la sig pagina "1.Datos Cliente"
    }

//Pagina 1.Datos Cliente
    DatosDelCliente(){
        //Muestra pop-up "Información de Contactos"
        within({frame: ['[id="kioskoA0"]']}, () => {
            I.click(this.fields.celularcliente)
            I.wait(3)
        });

        //Acepta pop-up "Información de Contactos"
        I.waitForElement(this.fields.popupserv, 3)
        I.click(this.fields.popupservAcp)

        //Llena Datos de Cliente
        within({frame: ['[id="kioskoA0"]']}, () => {
            //Llenar datos de contracto
            I.fillField(this.fields.celularcliente, this.fields.DATOScelularcliente)
            I.fillField(this.fields.confirmaCelular, this.fields.DATOScelularcliente)
            I.fillField(this.fields.telcontacto, this.fields.DATOStelcontacto)
            I.fillField(this.fields.nombreCorreo, this.fields.DATOSnombreCorreo)
            I.fillField(this.fields.dominioCorreo, this.fields.DATOSdominioCorreo)
            I.fillField(this.fields.nombreCorreoConf, this.fields.DATOSnombreCorreo)
            I.fillField(this.fields.dominioCorreoConf, this.fields.DATOSdominioCorreo)
            //Llenar combobox de oficina Regimen
            I.click(this.fields.regimen)
            I.executeScript(() =>{
                const select = document.getElementById('comboRegimen');
                select.value = 'COMERCIAL';
                select.dispatchEvent(new Event ('change'));
            });
            I.wait(3)
            //Llenar combobox de oficina comercial
            I.switchTo('[id="detalleOficinas"]')
                I.fillField(this.fields.oficina, this.fields.DATOSoficina)
                I.wait(3)
            I.switchTo()
        });

        //Valida datos cliente y llenar datos comerciales
        within({frame: ['[id="kioskoA0"]']}, () => {
            I.click(this.fields.validaDatosCliente)
            I.wait(3)
            I.fillField(this.fields.nombreCom, this.fields.DATOSnombreCom)
            I.fillField(this.fields.nombreFactCom, this.fields.DATOSnombreFactCom)
            I.click(this.fields.botonRFC)
            //SCROLL para posicionarse frente a la ventana RFC
            I.executeScript(() => {
                document.querySelector('[id="fr_domicilio"]').scrollIntoView();
            });
            I.wait(3)
            //Llenar datos de RFC
            I.switchTo('[id="dialog-body"]')
                I.wait(3)
                I.click(this.fields.sinRFC)
                I.wait(3)
                I.click(this.fields.continuarRFC)
            I.switchTo()
        });

        within({frame: ['[id="kioskoA0"]']}, () => {
            //Llenar combobox de giro
            I.click(this.fields.giro)
            I.executeScript(() =>{
                const select = document.getElementById('cboxcomboGiro');
                select.value = 'ABARROTES';
                select.dispatchEvent(new Event ('change'));
            });
            //Abrir popup de identificación
            I.wait(3)
            I.waitForElement('[id="tableIdentifica"]', 3)
            I.click(this.fields.tipoIdentificacion)
        });

        //Esperar popup para tipo de identificacion
        I.waitForElement(this.fields.popupIdenfiticacion, 3)
        I.wait(3)
        
        //Llenar popup de tipo de identificacion
        within({frame: ['(//body[@onunload]//iframe)[1]']}, () => {
            I.click(this.fields.popupSelectoID)//se muestra opciones de identificacion
            I.executeScript(() =>{
                const select = document.getElementById('cboxtypeId');
                select.value = 'INE';
                select.dispatchEvent(new Event ('change'));
            });
            I.wait(3)
            I.click(this.fields.popupSelectoID) //se ocultan opciones de identificacion

            I.executeScript(() => {
                const btn = document.getElementById("btnValidate");
                if (btn) {
                    btn.classList.remove('btn-disabled-express'); // Elimina la clase que lo desactiva
                    btn.disabled = false; // Si estuviera deshabilitado por atributo
                }
            });
            //I.wait(3)

            //Llenar el campo de identificacion
            I.fillField(this.fields.campoID, this.fields.DATOScampoID)
            I.wait(3)

            //Se valida datos y se muestra ventana adicional
            I.click(this.fields.validarID)
            I.wait(5)
            I.closeOtherTabs()
            I.wait(3)
            I.click(this.fields.aceptarID)
            I.wait(3)      
        });

        within({frame: ['[id="kioskoA0"]']}, () => {
            //Llenar datos de responsable
            I.fillField(this.fields.nombreResp, this.fields.DATOSnombreResp)
            I.fillField(this.fields.celularResp, this.fields.DATOScelularResp)
            //SCROLL para posicionarse frente en el mapa
            I.executeScript(() => {
                document.querySelector('[id="fr_domicilio"]').scrollIntoView();
            });
            I.switchTo('[id="fr_domicilio"]')
                I.switchTo('[id="ifUno"]')
                    I.fillField(this.fields.direccion, this.fields.DATOSdireccion)
                    I.click(this.fields.direccionBuscar)
                    I.wait(3)
                    I.click(this.fields.confirMapa)
                    I.wait(10)
            I.switchTo() //sale del frame por completo 
        });

        //Regresa al kiosko y nos movemos al frame ifDos
        within({frame: ['[id="kioskoA0"]']}, () => {
            I.switchTo('[id="fr_domicilio"]')
                I.waitForElement('[id="ifDos"]', 3)
                I.executeScript(() => {
                    document.querySelector('[id="ifDos"]').scrollIntoView();
                });
                I.switchTo('[id="ifDos"]')
                    // PENDIENTE LLENADO DE OTROS DATOS DE SER NECESARIO
                    I.click(this.fields.tipoCalle)
                    I.executeScript(() =>{
                        const select = document.getElementById('cboxcombotipocalle');
                        select.value = 'CALLE';
                        select.dispatchEvent(new Event ('change'));
                    });
                    I.fillField(this.fields.calle, this.fields.DATOScalle)
                    I.fillField(this.fields.numEx, this.fields.DATOSnumEx)
                    I.fillField(this.fields.entreCalle1, this.fields.DATOSentreCalle1)
                    I.fillField(this.fields.entreCalle2, this.fields.DATOSentreCalle2)
                    
                    //PENDIENTE TOMAR DATO DE INPUT DE CP PARA GUARDARLO EN CAMPO

                    I.click(this.fields.confirmaDom)
            I.switchTo()
        });

        ///pause()
        
        //Regresa al kiosko aceptamos domicilio en mapa
        within({frame: ['[id="kioskoA0"]']}, () => {
            //SCROLL para posicionarse frente en el mapa
            I.executeScript(() => {
                document.querySelector('[id="fr_domicilio"]').scrollIntoView();
            });
            I.wait(5)
            I.switchTo('[id="fr_domicilio"]')
                I.switchTo('[id="ifUno"]')
                    I.click(this.fields.domiSI)
                    I.wait(15)
            I.switchTo() //sale del frame por completo 
        });

        //Regresa al kiosko y nos movemos al frame ifDos
        within({frame: ['[id="kioskoA0"]']}, () => {
            I.waitForElement(this.fields.memo, 3)
            I.executeScript(() => {
                document.querySelector('[id="memo"]').scrollIntoView();
            });
            I.fillField(this.fields.memo, this.fields.DATOSmemo)
            I.click(this.fields.continuarDC)
            I.wait(20)

            //PENDIENTE ORDEN DUPLICADA
        });

        //Mensaje de Gastos de Instalación
        I.click(this.fields.confirmaGI)
        I.wait(30) //Tiempo de espera estimado para llegar a la sig pagina "2.Servicios"
    }

//Pagina 2.Servicios
    ContratacionServicios(){
        //Seleccion de tipo de oferta y paquete
        within({frame: ['[id="kioskoA0"]']}, () => {
            I.switchTo('[id="ofertaPlanes"]')
                if(this.fields.tipoServicio == '2L'){
                    I.click(this.fields.ts2L)
                } else if (this.fields.tipoServicio == 'ML') {
                    I.click(this.fields.tsML)
                } else if (this.fields.tipoServicio == '20'){
                    I.click(this.fields.ts20)
                }
                I.waitForElement('[id="contenedorOferta"]', 3)
                I.executeScript(() => {
                    document.querySelector('[id="contenedorOferta"]').scrollIntoView();
                });
                I.click(this.fields.primerOferta)
                I.wait(5)
            I.switchTo()
        });

        // Datos adicionales
        within({frame: ['[id="kioskoA0"]']}, () => {
            I.executeScript(() => {
                document.querySelector('[style="margin-top: 15px; margin-bottom: 15px;"]').scrollIntoView();
            });
            //Valida la oferta si es 2L / ML
            if(this.fields.tipoServicio !== '20'){
                I.click(this.fields.validarOferta)
                I.wait(10)
                I.closeOtherTabs()
                I.wait(3)
            }
            //Desactiva promo cloud de ser el caso  
            if(this.fields.aceptaPromoCloud == 'NO') {
                I.click(this.fields.promoCloud)
            }
            //Confirma forma de pago de GI
            I.click(this.fields.pagoGI)
            //Desactiva domiciliacion           
            if(this.fields.aceptaDomiciliacion == 'NO') {
                I.click(this.fields.promoCloud)
            }
            //Desactiva paperless
            if(this.fields.aceptaRT == 'NO') {
                I.click(this.fields.reciboTlx)
            }
            I.wait(3)
            I.click(this.fields.continuarSrv)
        });
        
        //Llena los datos de domiciliación
        if(this.fields.aceptaDomiciliacion == 'SI') {
            I.waitForElement('[id="frameD"]', 3)
            within({frame: ['[id="frameD"]']}, () => {
                I.wait(3)
                I.fillField(this.fields.campoAPdom, this.fields.DATOcampoAPdom)
                I.fillField(this.fields.campoAMdom, this.fields.DATOcampoAMdom)
                I.fillField(this.fields.campoNombreDom, this.fields.DATOcampoNombreDom)
                I.fillField(this.fields.campoCelularDom, this.fields.DATOcampoCelularDom)
                I.fillField(this.fields.campoCorreoDom, this.fields.DATOcampoCorreoDom)
                I.wait(3)
                I.click(this.fields.aceptaDatosTA)
            });
        }
        I.wait(10) //Tiempo de espera estimado para llegar a la sig pagina "3.Facturación" - EDITADO: De 5 a 10, por las mañanas la pag se alenta
    }

    //PENDIENTE CONFIGURACION DE VENTANA DE ORDENES DUPLICADAS

//Pagina 3.Facturación
    DatosFacturacion(){
        within({frame: ['[id="kioskoA0"]']}, () => {
            I.waitForElement('[id="codIns"]', 3)
            //Entra al iframe de codigo de insercion y cm
            I.switchTo('[id="codIns"]')
                I.fillField(this.fields.codInsercion, this.fields.DATOcodInsercion)
                I.wait(3)
                //Si es cuenta maestra inserta dato
                if(this.fields.cuentaMaestra == 'SI'){
                    I.fillField(this.fields.campoCMaestra, this.fields.DATOcampoCMaestra)
                    I.wait(3)
                }
            I.switchTo()
        });
        
        within({frame: ['[id="kioskoA0"]']}, () => {
            I.executeScript(() => {
                document.querySelector('[id="catEstado"]').scrollIntoView();
            });
            //Entra al iframe de dirección de facturación
            I.switchTo('[id="catEstado"]')
                I.fillField(this.fields.cpFacturacion, this.fields.DATOScp)
                I.wait(3)
            I.switchTo()
        });

        within({frame: ['[id="kioskoA0"]']}, () => {
            I.click(this.fields.contratarFact)
            I.wait(3)
        });
        I.wait(100) //Tiempo de espera estimado para llegar a la sig pagina de "encusta y PUV" - Ya genera OS
    }
//Pagina 3.1 Preguntas adicionales y PUV
    PreguntasyPUV(){
        I.click(this.fields.continuarCatEqpCob)
        I.wait(60) //Tiempo de espera estimado para pasar a la sig pregunta - EDITADO: De 50 a 60, por las mañanas la pag se alenta

        within({frame: ['[id="kioskoA0"]']}, () => {
            I.switchTo('[id="ifrContrataPUV"]') //PUV
                I.switchTo('[id="ifPantMCob"]') //Muestra numero generado para continuar con encuesta conectividad
                    I.click(this.fields.clienteReqCob)
                    I.wait(10)
            I.switchTo() //sale del frame por completo 
        });

        //Encuesta de conectividad
        within({frame: ['[id="kioskoA0"]']}, () => {
            I.switchTo('[id="ifrContrataPUV"]') //PUV
                I.switchTo('[id="ifPantQuizz"]') //Inicia encuesta conectividad
                    if (this.fields.cobP1 == 'CHICO'){
                        I.click(this.fields.cobP1R1)
                    } else if (this.fields.cobP1 == 'MEDIANO'){
                        I.click(this.fields.cobP1R2)
                    } else if (this.fields.cobP1 == 'GRANDE'){
                        I.click(this.fields.cobP1R3)
                    } else if (this.fields.cobP1 == 'EXTRAGRANDE'){
                        I.click(this.fields.cobP1R4)
                    }
                    I.click(this.fields.cobP1Continuar)
                    I.wait(3)
                    if (this.fields.cobP2 == 'SI'){
                        I.click(this.fields.cobP2R1)
                    } else if (this.fields.cobP2 == 'NO'){
                        I.click(this.fields.cobP2R2)
                    }
                    I.click(this.fields.cobP2Continuar)
                    I.wait(3)
                    if (this.fields.cobP3){
                        I.click(this.fields.cobP3R1)
                    } 
                    I.click(this.fields.cobP3Continuar)
                    I.wait(3)
                    I.waitForElement(this.fields.noRequiereCob, 3)
                    I.click(this.fields.OKnoRequiereCob)
                    I.wait(5)
            I.switchTo() //sale del frame por completo 
        });

        //PUV
        within({frame: ['[id="kioskoA0"]']}, () => {
            I.switchTo('[id="ifrContrataPUV"]') //PUV
                I.click(this.fields.PUVTerminar)
                I.waitForElement(this.fields.ventanaDeseaAparato, 3)
                I.wait(3)
                if (this.fields.DeseaAparato == 'SI'){
                    I.click(this.fields.DeseaAparatoSI)
                } else if (this.fields.DeseaAparato == 'NO'){
                    I.click(this.fields.DeseaAparatoNO)
                }
                I.wait(10)
                I.waitForElement(this.fields.ventanaMotivo, 3)
                I.switchTo('[id="frameEncuesta"]') //Motivo
                    I.click(this.fields.motivo)
                    I.wait(1)
                    I.click(this.fields.motivoContinuar)
            I.switchTo() //sale del frame por completo 
        });

        //Casa Inteligente
        I.wait(5)
        if(this.fields.deseaCasaInt == 'SI'){
            I.click(this.fields.deseaCasaIntSI)
        } else if (this.fields.deseaCasaInt == 'NO'){
            I.click(this.fields.deseaCasaIntNO)
        }
        I.wait(5)

        //Servicios adicionales
        within({frame: ['[id="kioskoA0"]']}, () => {
            I.switchTo('[id="adicionales"]') //adicionales
                I.waitForElement(this.fields.formaAdicionales, 3)
                I.click(this.fields.salirSA)
            I.switchTo()
        });

        I.wait(10) //Tiempo de espera estimado para llegar 4.Cierre de solicitud
    }

//Pagina 4.Cierre de solicitud
    CierreVenta(){
        //menu de ae
        //I.acceptPopup()
        I.waitForElement(this.fields.confirmaGIcierre, 5)
        I.click(this.fields.confirmaGIcierre)

        // Descarga

        I.wait(15)
    }
}
module.exports = new A0SinPortaCom();