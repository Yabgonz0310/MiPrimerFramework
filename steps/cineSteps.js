import CineFan from '../pages/cine.js';
const {I} =inject();


Given("Estoy en la pagina general", () => {
    CineFan.mainpage();
});

When("Selecciono Registrarse", () => {
    CineFan.ctanueva();
});

When("Capturo datos para la cuenta", () => {
   CineFan.datosregistro();
});

Then("Se muestra la pantalla con los campos capturados", () => {
   CineFan.continuar();
});