const { and } = require("ajv/dist/compile/codegen");
const A0SinPortaCom = require("../pages/A0SinPortaCom");
const { log } = require("neo-async");

const {I} = inject();

Given('Estoy en la pagina principal', () => {
    I.amOnPage('/pisagrafico_os3/zntjsp/SVT2502MAIN.jsp')
})

When('En el menu selecciono Alta Sin Portabilidad', () => {
    A0SinPortaCom.MenuPrincipal()
})

When('Lleno los datos del cliente', () => {
    A0SinPortaCom.DatosDelCliente()
})

When('Lleno los datos del paquete', () => {
    A0SinPortaCom.ContratacionServicios()
})

When('Lleno los datos de facturacion', () => {
    A0SinPortaCom.DatosFacturacion()
})

When('Contesto preguntas adicionales y PUV', () => {
    A0SinPortaCom.PreguntasyPUV()
})

Then('Valido cierre de venta', () => {
    A0SinPortaCom.CierreVenta()
})