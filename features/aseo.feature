Feature: Crear una cuenta para articulos de limpieza

Scenario: Ingresar a una pagina para crear una cuenta de limpieza
Given Estoy en la pagina de inicio de limpieza
When Seleccionar crear cuenta
And Capturar datos necesarios
Then Se muestra la pantalla con los campos llenos