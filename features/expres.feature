Feature: Altas residenciales

Scenario: Generar altas residenciales
Given Estoy en la pagina de express
#And Estoy logueado con credenciales
When Selecciono Alta sin Portabilidad y capturo los datos
Then Se genera la OS de servicio
