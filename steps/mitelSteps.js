import Mitel from '../pages/mitelcel.js'
const {I} = inject();

Given("Estoy en el sitio principal",() => {
    Mitel.initpage();
})

When("Selecciono el Mitelcel",() => {
    Mitel.cuenta();
})

When("Seleciono la opcion de Registrate y capturo telefono",() => {
    Mitel.nvoregistro();
})
Then("Se muestra la pantalla con los campos completados",() => {
    Mitel.verinfo();
})