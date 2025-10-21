Feature: Alta Sin Portabilidad

Scenario: Alta sin portabilidad regimen comercial
    Given Estoy en la pagina principal
    When En el menu selecciono Alta Sin Portabilidad
    And Lleno los datos del cliente
    And Lleno los datos del paquete
    And Lleno los datos de facturacion
    And Contesto preguntas adicionales y PUV
    Then Valido cierre de venta