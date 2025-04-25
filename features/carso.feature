Feature: Ingresar a cursos de capacitacion

Scenario: Ingresar con cuenta activa a una pagina de cursos
Given Estoy en la pagina de login
When Escribo el mail y contrasena
And Selecciono el boton ingresar
Then Se visualizan los cursos