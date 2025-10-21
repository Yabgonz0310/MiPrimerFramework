import WaltPage from '../pages/walmart.js';
const {I} =inject();


Given("Estoy en la pagina de inicio", () => {
    WaltPage.principal();
});

When("Selecciono crear cuenta", () => {
    WaltPage.clickcrearcta();
});

When("Capturo datos necesarios para la cuenta", () => {
   WaltPage.registro();
});

Then("Selecciono Continuar para crear una cuenta", () => {
   WaltPage.continuar();
});