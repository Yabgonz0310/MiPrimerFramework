import AltaRes from '../pages/expres.js';

const { I } =inject();

Given("Estoy en la pagina de express", () => {
    AltaRes.inicioexpress();
});

When("Selecciono Alta sin Portabilidad y capturo los datos", () => {
    AltaRes.tipoalta();
    AltaRes.servicio();
    AltaRes.datoscliente();
    AltaRes.oferta();
    AltaRes.facturacion();
});
