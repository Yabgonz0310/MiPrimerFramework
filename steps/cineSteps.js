import cineFan from '../pages/cine.js';
const {I} =inject();


Given("Estoy en la pagina de inicio", () => {
    cineFan.mainpage();
});

When("Selecciono Registrarse", () => {
    cineFan.ctanueva();
});

When("Capturo datos para la cuenta", () => {
   cineFan.datosregistro();
});

Then("Se muestra la pantalla con los campos capturados", () => {
   cineFan.continuar();
});