import Aseocta from '../pages/aseo.js';
const { I } = inject();

Given("Estoy en la pagina de inicio de limpieza", () => {
    Aseocta.clean();
});
When("Seleccionar crear cuenta", () => {
    Aseocta.cuentaclean();
});
When("Capturar datos necesarios", () => {
    Aseocta.camposclean();
});
Then("Se muestra la pantalla con los campos llenos", () => {
    Aseocta.viewresult();
});