
import LoginPage from '../pages/loginPage.js';
const { I } = inject();

Given("Estoy en la pagina principal", () => {
    LoginPage.iniciopag();
});

When("Voy a la pagina de login", () => {
LoginPage.clickLoginButton();
});

When("Escribo nombre de usuario y contrasena", () => {
   LoginPage.ingcredenciales();
});

Then("Se visualiza link de ayuda", () => {
   LoginPage.verBtnAyuda();
});

