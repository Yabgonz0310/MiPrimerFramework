const { select } = require("cheerio-select");
const SegEmp = require('../pages/loginSegEmp.js')
const {I} = inject();

Given('Estoy en la pagina principal', () =>{
    SegEmp.init();
})

When('Escribir el nombre de usuario y la contraseña', () =>{
    SegEmp.credencial();
    SegEmp.sinoppasociada();
    SegEmp.datos_serv_contratar();
})
/*
When('Crear usuario', () =>{
    SegEmp.searchuser();
    SegEmp.solemp();
    SegEmp.notas();
})

Then('Veo mi usuario', () =>{
    I.wait(30);
})
    */
