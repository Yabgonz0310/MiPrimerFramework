module.exports = {
  llenarDatos(I, selector, valor) {
    if (valor && valor.trim() !== '') {
      I.fillField(selector, valor);
    }
  }
};


/* Esto se puede utilizar directamente en el código
if (this.fields.calif) {
      //I.fillField(this.fields.inputcalif, this.fields.calif);
      }*/