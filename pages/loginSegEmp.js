const {I} = inject ();

class SegEmp {
    constructor (){
        this.fields ={
            inicio:'https://gisppempresarial.intranet.telmex.com:8443/cas/login?service=https%3A%2F%2Fgisppempresarial.intranet.telmex.com%2FCRM%2Fdev%2Fcrm%2Flogin%2F',
            inputusername: '//*[@id="username"]',
            username: 'NAVAJK',
            inputpassword: '//*[@id="password"]',
            pass: 'Prueba01.',
            btnin:'//*[@id="login"]/div[3]/input[3]',
            seginforma: '//div[@id="ventana_header-title-textEl"]',
            despliegaclietes: '//div[@id="tool-1041-toolEl"]',
            seleccionacliente: '//*[@id="gridview-1023-record-233"]/tbody/tr/td/div/div',
            seleccinaford:'//*[@id="gridview-1023-record-232"]/tbody/tr[2]/td/div/h4[2]/b',

            paginacups:'https://gisppempresarial.intranet.telmex.com/CRM/dev/crm/gis/proyectos_CUP_online/index.php?cliente=749',
            selecsinoppasociada: '//b[contains(text(),"SIN OPP ASOCIADA")]',
            cambussolicitud: '//*[@id="sfSolicitudes-1027-inputEl"]',
            //'//input[@id="sfSolicitudesPrincipal-1018-inputEl"]',
            solicitud:'12021387',
            btnbussol:'//*[@id="sfSolicitudes-1027-trigger-search"]',
            carpetasol:'//div[@data-groupname="CUPG-2509-000207 - Septiembre 2025"]',
            subcarpsol:'//div[@id="gridview-1020"]//tr[@class="  x-grid-row"]//td[@role="gridcell"]',
            irasol:'//img[@onclick="App.util.GlobalUtilitiesController.f_validaIOM({solicitud:12021387 });"]',

            paginaSolicitud:'https://gisppempresarial.intranet.telmex.com/CRM/dev/crm/GIS_load/store/load.php?solicitud=12021387',
            camsitiosau: '//span[@class="select2-selection__placeholder"]',
            //'//*[@id="select2-sitio-container"]/span',
            cambussau:'span[class="select2-search select2-search--dropdown"]',
            camescripsau:'[class="select2-search__field"]',
            sitiosau:'7015',
            camcotiz:'//span[@class="selection"]//span[@id="select2-cotizacion-container"]',
            inputcotz:'//span[@class="select2-search select2-search--dropdown"]//input[@class="select2-search__field"]',
            cotiz:'CO194108',
            cmod: '//span[@class="selection"]//span[@id="select2-modalidad-container"]',
            modalidad:'//select[@id="modalidad"]',
            //'//span[@class="selection"]//span[@id="select2-modalidad-container"]',
            iptroncloud:22652,
            iptroncal:6503


            // '//span[@class="select2-results"]//li[text()="TRONCAL IP CLOUD"]'




        }
    }
    init (){
        I.amOnPage(this.fields.inicio);
        I.wait(7);
    }
    credencial(){
        I.fillField(this.fields.inputusername,this.fields.username);
        I.fillField(this.fields.inputpassword, this.fields.pass);
        I.click(this.fields.btnin); 
        I.wait(20)  
    } 
    sinoppasociada(){//1.Cerrar Informa 2.seleccion de cliente 3.Ir a sin OPP asociada 
    // 4.Buscar solicitud 5.Ingresar a la solicitud

    //1.Cerrar Informa
        I.click(this.fields.seginforma);
        I.wait(10);
        
    //2.seleccion de cliente
        I.click(this.fields.despliegaclietes);
        I.click(this.fields.seleccionacliente);
        I.click(this.fields.seleccinaford); 
        I.wait(5);
    //3. Ir a sin OPP asociada
        I.amOnPage(this.fields.paginacups); 
        I.wait(2);
        I.click(this.fields.selecsinoppasociada); 
        I.wait(15);
    //4.Buscar solicitud
        I.click(this.fields.cambussolicitud);
        //Captura datos solicitud
        I.fillField(this.fields.cambussolicitud,this.fields.solicitud);
        I.wait(3)
        
        I.click(this.fields.btnbussol);
        I.wait(10);
        
        
        //5.Ir a solicitud
        //I.seeElement(this.fields.carpetasol);
        I.click(this.fields.carpetasol); 
        I.wait(10);
        I.click(this.fields.subcarpsol);
        I.click(this.fields.irasol);
        I.wait(10);
  
    }
    datos_serv_contratar(){
        //pause();
        //I.amOnUrl(this.fields.paginaSolicitud);
        //I.waitForURL(this.fields.paginaSolicitud);
        I.amOnPage(this.fields.paginaSolicitud);
        //I.waitForElement(this.fields.paginaSolicitud,10);
        //1.Escribir el Sitio SAU

        I.wait(30)
        I.click(this.fields.camsitiosau); 
        I.click(this.fields.cambussau);
        I.click(this.fields.camescripsau);
        I.fillField(this.fields.camescripsau,this.fields.sitiosau);
        I.wait(3)
        I.pressKey('Enter')
        I.wait(3)
       
        //2.Escribir Cotización
        I.click(this.fields.camcotiz);        
        I.click(this.fields.inputcotz);
        I.fillField(this.fields.inputcotz,this.fields.cotiz);
        I.wait(3)
        I.pressKey('Enter')
        I.wait(3)
        pause();

        //3.Seleccionar Modalidad de Producto
        //span[@class="selection"]//span[@id="select2-modalidad-container"]
        //I.click('//*[@id="select2-modalidad-container"]')
        //I.seeInField('//*[@id="select2-modalidad-container"]',{index: 1})
        //I.click(this.fields.modalidad)
        I.wait(3)
        I.selectOption(this.fields.modalidad, this.fields.iptroncloud)
        //I.seeInField('//*[@id="modalidad"]', { index: 1 })
        //I.pressKey('ArrowDown');
        //I.pressKey('Enter')
        I.wait(10)
    }
    /*
    searchuser(){
        I.waitForEnabled(this.fields.inicio);
        I.fillField(this.fields.inputusername, this.fields.username)
    }   
    solemp(){

    }
    notas(){

    }*/
}
module.exports = new SegEmp()