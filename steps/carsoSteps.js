
import CarsoCursos from '../pages/carso.js';
const { I } = inject();

Given("Estoy en la pagina de login", () => {
    CarsoCursos.iniciolog();
});
When("Escribo el mail y contrasena", () => {
   CarsoCursos.credenciales();
});
When("Selecciono el boton ingresar", () => {
CarsoCursos.loginButton();
});
Then("Se visualizan los cursos", () => {
   CarsoCursos.verInicio();
});
