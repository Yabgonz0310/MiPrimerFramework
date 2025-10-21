import SearchUser from '../pages/usuario.js';
const { I } =inject();

Given ("Estoy en la pagina de administrador", () => {
    SearchUser.inicioadmin();
})
When("Selecciono la opcion de usuarios y realiza busqueda", () => {
    SearchUser.buscaruser();
})