Feature: Crear una cuenta nueva

Scenario: Ingresar a la pagina para crear una cuenta
Given Estoy en la pagina de inicio
When Selecciono Registrarse
And Capturo datos para la cuenta
Then Se muestra la pantalla con los campos capturados