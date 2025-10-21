import AttChat from '../pages/att.js';
const {I} =inject();


Given("Realizo Mock al msj de bienvenida", () => {
    AttChat.mocking();
});

When("Estoy en la pagina de inicio", () => {
    AttChat.attinicio();
});

When("Selecciono el chat", () => {
   AttChat.chat();
});

Then("Visualizo el cambio", () => {
   AttChat.vercambio();
});